const http = require("http");
const fs = require("fs");

const create = (data) => {
  fs.writeFile("sample.txt", data, (err) => {
    if (err) throw err;
    console.log("File created");
  });
};

const server = http.createServer((req,res) => {
  // fs.readFile("sample.txt", (err, data) => {
  //   res.end(data);
  // });
  const stream = fs.createReadStream("sample.txt");
  stream.pipe(res);
});

create("Hi hello vanakkam from salem,....varta mame durrrrrrrrr...........");

server.listen(2000);
