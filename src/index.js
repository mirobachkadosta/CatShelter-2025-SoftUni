import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {

  if (req.url === '/') {
    const homeHtml = await fs.readFile('./src/resources/views/home/index.html', { encoding: 'utf-8' });
    res.writeHead(200, {
      'Content-type': 'text/html'
    })
    res.write(homeHtml);
  }

  if (req.url === '/styles/site.css') {
    const siteCss = await fs.readFile('./src/resources/styles/site.css', { encoding: 'utf-8' });
    res.writeHead(200, {
      'Content-type': 'text/css'
    })

    res.write(siteCss)
  }
  res.end();
})

server.listen(4000);

console.log('Server is listening on http://localhost:4000...');