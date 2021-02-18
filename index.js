var http = require('http');

var extract = require('./extract');
var read = require('./read');
var wss = require('./websockets-server');


var handleError = function(err, res) {
  var page404 = fs.readFile('app/test.html', function(err, data) {
    return data;
  });
  res.end(page404);
};


var server = http.createServer(function(req, res) {
  console.log('Responding to a request.');


  var filePath = extract(req.url);

  var file = read(filePath,res);

});
server.listen(3000);
