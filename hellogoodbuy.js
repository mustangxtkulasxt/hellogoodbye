const http = require('http');
const url = require('url');

http.createServer((req, res) => {
  const path = url.parse(req.url, true).pathname;
  if (path === '/hello') {
    res.write('Hello, World!');
    res.end();
  } else if (path === '/goodbye') {
    res.write('Goodbye, World!');
    res.end();
  } else {
    res.write('Unknown path');
    res.end();
  }
}).listen(8000);
