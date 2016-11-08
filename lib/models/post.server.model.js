const mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  body: String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post;