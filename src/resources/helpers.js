import fs from 'fs/promises';



export default async function fsRenderViews(res, url) {
  if (url === "/") {
    try {
      const pageHtml = await fs.readFile("./src/resources/views/home/index.html", { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(pageHtml);
      return;
    } catch (e) {
      console.log(e);
      return;
    }
  }
  if (url === "add-breed") {
    try {
      const pageHtml = await fs.readFile("./src/resources/views/addBreed.html", { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(pageHtml);
      return;

    } catch (e) {
      console.log(e);
      return;
    }
  }
  if (url === "add-cat") {
    try {
      const pageHtml = await fs.readFile("./src/resources/views/addCat.html", { encoding: "utf-8" });


      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(pageHtml);
      return;

    } catch (e) {
      console.log(e);
      return;
    }
  }
  if (url === "styles/site.css") {

    try {
      const pageHtml = await fs.readFile("./src/resources/styles/site.css", { encoding: "utf-8" });

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(pageHtml);
      return;

    } catch (e) {
      console.log(e);
      return;
    }
  }
}