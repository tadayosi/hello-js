const http = require('http');
const url = require('url');

let server = http.createServer((request, response) => {
  let name = url.parse(request.url, true).query.name;
  if (!name) {
    name = request.connection.remoteAddress
  }
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
  response.end(`Hello, ${name}!\n`);
});
console.log('server listening at http://localhost:8080');
server.listen(8080);