const http = require('http');
const fs = require('fs');
const { join } = require('path');

const server = http.createServer((req, res) => {
    let {url} = req;
    
    if (/^[^.]+$/.test(url)) {
        console.log('no dot')
        url = `${url}${url.endsWith('/') ? '' : '/'}index.html`
    }

    try {
        body = fs.readFileSync(join(__dirname, `public${url}`)).toString('utf8');
    } catch (e) {
        res.statusCode = 404;
        res.end();

        return;
    }

    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(body)

    res.end();
}).listen(3000);

module.exports = server
