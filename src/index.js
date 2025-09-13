import http from "http";

const server = http.createServer((req, res) => {
  res.write('Hello world !');

  res.end();
})

server.listen(4000);

console.log('Server is listening on http://localhost:4000...');