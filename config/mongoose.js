var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.db);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', function(){
  console.log('DB Connected ...');
});

// 加载 models
require('../lib/models/post.server.model');

module.exports = mongoose;