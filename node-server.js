const http = require("http");
const fs = require("fs");

// request object, response object
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  console.log(req.url)
  if (req.url == "/") {
    res.write("這裡是首頁");
    res.end();
  } else if (req.url == "/page2") {
    res.write("這是第二頁");
    res.end();
  } else if (req.url == "/node-practice") {
    fs.readFile("index.html", (e, data) => {
      if (e) {
        res.write("讀取頁面錯誤!");
        res.end();
      } else {
        res.write(data);
        res.end();
      }
    });
  } else {
    res.write("頁面不存在");
    res.end();
  }
});
//  callback function with 2 parameters

server.listen(3000, () => {
  console.log("page works on :3000");
});
