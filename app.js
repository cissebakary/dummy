const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is tthe home page");
    return;
  }
  if (req.url === "/about") {
    res.end("this is tthe About Us page");
    return;
  }

  res.end("your page is not found");
});

server.listen(3000);
