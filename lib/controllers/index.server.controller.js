var Post = require('mongoose').model('Post');

var IndexController = module.exports = {};

IndexController.index = function(req, res){
  res.render('index');
};

IndexController.about = function(req, res){
  res.render('about');
};
