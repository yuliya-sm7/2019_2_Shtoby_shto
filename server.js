const http = require('http');
const fs = require('fs');
const { join } = require('path');

const url = require('url');

const filetypes = {
    "html": "text/html",
    "css" : "text/css",
    "js"  : "application/javascript"
};

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
    } else {
        const ft = `${currentUrl.split('.')[1]}`;
        res.setHeader('Content-Type', `${filetypes[ft]}`);
    }

    const newPath = join(__dirname, `public${currentUrl}`)

    try {
        body = fs.readFileSync(newPath)
    } catch (e) {
        res.statusCode = 404;
        res.end();

        return;
    }
    // res.writeHead(200, {'Content-Type': 'text/html'})
    res.writeHead(200);

    res.end(body);
}).listen(3000);

module.exports = server
