//
//                     Home Controller
//

// =======================================================
//  Dependencies
// =======================================================
//var app = module.app = module.parent.app;

// =======================================================
//  Models
// =======================================================
// ...

// =======================================================
//  Exports
// =======================================================
module.exports.display = function($){
  $.data.title = "Hello World";
  $.end();
};
