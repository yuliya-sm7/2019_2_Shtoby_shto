const http = require('http');
const fs = require('fs');
const { join } = require('path');

const server = http.createServer((req, res) => {
    let {url} = req;

    if(/\/$/.test(url)) {
        // если обращаемся к '/'
        url = `${url}index.html`
    } else if (/^[^.]*$/.test(url)) {
        // если же обращаемся по пути, не указав, что нам нужен html файл
        url = `${url}.html`
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
}).listen(8080);

module.exports = server
