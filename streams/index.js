const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  const rs = fs.createReadStream("input.txt");
  rs.on("data", (chunksData) => {
    res.write(chunksData);
  });
  rs.on("end", () => {
    
    res.end();
  });
  rs.on("error", (err) => {
    console.log("err");
    res.end("file not found");
  });
});

server.listen(5000, () => {
  console.log("server is start on port 5000");
});
