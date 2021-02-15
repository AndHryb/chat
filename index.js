var http = require('http');
//var fs = require('fs');
//const mime = require('mime');
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
  //var fileType = mime.getType(filePath);
  var file = read(filePath,res);

  /*fs.readFile(filePath, function(err, data) {
    if (err) {
      fs.readFile('app/err404.html', function(err, data) {
        res.end(data);
      });
      return;
    } else {
      console.log('The file type is: ' + fileType);
      res.setHeader('Content-Type', fileType);
      res.end(data);
    }

  });*/

});
server.listen(3000);
