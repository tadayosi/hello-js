const http = require('http');
const url = require('url');
const os = require('os');

const hostname = os.hostname();

let server = http.createServer((request, response) => {
  let name = url.parse(request.url, true).query.name;
  console.log('received: name =', name);
  if (!name) {
    name = request.socket.remoteAddress
  }
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=UTF-8' });
  response.end(`Hello ${name} from ${hostname}\n`);
});
console.log('server listening at http://localhost:8080');
server.listen(8080);
