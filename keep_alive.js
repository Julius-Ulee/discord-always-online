var http = require('http');

http.createServer(function (req, res) {
  res.write("schoolprograms.my.id");
  res.end();
}).listen(8080);
