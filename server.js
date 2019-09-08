const http = require('http');
const fs = require('fs');
const { join } = require('path');

const url = require('url');

const server = http.createServer((req, res) => {
    let currentUrl = url.parse(req.url, true).pathname;

    if (/^[^.]+$/.test(currentUrl)) {
        if (!currentUrl.endsWith('/')) {
            res.setHeader("Location", req.url + "/");
            res.writeHead(302);
            res.end();
            return
        }
        currentUrl = `${currentUrl}index.html`
    }

    const newPath = join(__dirname, `public${currentUrl}`)

    try {
        body = fs.readFileSync(newPath)
    } catch (e) {
        res.statusCode = 404;
        res.end();

        return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'})

    res.end(body);
}).listen(3000);

module.exports = server
