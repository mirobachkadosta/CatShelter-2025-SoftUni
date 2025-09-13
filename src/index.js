import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {

  if (req.url === '/') {
    const homePage = await fs.readFile('./src/resources/views/home/index.html', { encoding: 'utf-8' });
    res.writeHead(200, {
      'Content-type': 'text/html'
    })

    res.write(homePage);
  }


  if (req.url === '/styles/site.css') {
    const siteCss = await fs.readFile('./src/resources/styles/site.css', { encoding: 'utf-8' });
    res.writeHead(200, {
      'Content-type': 'text/css'
    })

    res.write(siteCss);
  }

  if (req.url === '/add-breed') {
    const addBreedPage = await fs.readFile('./src/resources/views/addBreed.html', { encoding: 'utf-8' });

    res.writeHead(200, {
      'Content-type': 'text/html'
    })

    res.write(addBreedPage);
  }

  if (req.url === '/add-cat') {
    const addCat = await fs.readFile('./src/resources/views/addCat.html', { encoding: 'utf-8' });

    res.writeHead(200, {
      'Content-type': 'text/html'
    })

    res.write(addCat);
  }
  res.end();
})




server.listen(4000);

console.log('Server is listening on http://localhost:4000...');