const fs = require("fs");
const http = require("http");

const minimist = require('minimist')
const args = minimist(process.argv.slice(2))

const port = minimist(process.argv.slice(2),{
  default : {
    port : 3000,
  },
})

homeContent = "";
projectContent = "";
registryContent = "";

fs.readFile("home.html", (err, home) => {
  if (err) {
    throw err;
  }
  homeContent = home;
});

fs.readFile("project.html", (err, project) => {
  if (err) {
    throw err;
  }
  projectContent = project;
});

fs.readFile("registration.html", (err, registration) => {
  if (err) {
    throw err;
  }
  registryContent = registration;
});

http
  .createServer((req, res) => {
    const url = req.url;
    switch (url) {
      case "/project":
        res.write(projectContent);
        res.end();
        break;
      case "/registration":
        res.write(registryContent);
        res.end();
        break;
      default:
        res.write(homeContent);
        res.end();
    }
  })
  .listen(port);
