// Require File System Module
var fs = require("fs");

// Require Diet
var server = require("diet");
var mime = require("mime");
require("./websockets-server");
//var mime = require("mime");
// Create Server Instance
var app = server();

// Listen on Port 8000
app.listen(8000);

// Register RouteHandler for "http://localhost:8000/"

app.get("/", function($) {

  // set "Content-Type" header to "text/html"
  $.header("Content-Type", "text/html");

  // Read file at ~/yourProject/index.html

  fs.readFile(__dirname + "/views/html/index.html", function(error, content) {
    // handle error
    if (error) throw error;

    // Serve the file to the client

    $.end(content.toString());
  });
});

app.missing(function($) {
  var x = $.url;
  //$.end(x.path)
  fs.readFile(__dirname + "/views/html/" + x.path, function(error) {
    // handle error
    if (error) {
      fs.readFile(__dirname + "/views/error/error.html", function(error, content) {
        $.header("Content-Type", "text/html");
        $.end(content.toString());
      });

    }
    // Serve the file to the client
    else {
      var mimeType = mime.getType(x.path);
      $.header("Content-Type", mimeType);
      $.sendFile("/views/html/" + x.path);
    }
  });

});
