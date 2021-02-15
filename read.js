var fs = require('fs');
const mime = require('mime');

var readFile = function(filePath,res){

  var fileType = mime.getType(filePath);
  fs.readFile(filePath, function(err, data) {
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

  });
}

module.exports = readFile;
