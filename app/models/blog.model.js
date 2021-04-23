const mongoose = require("mongoose");

const Blog = mongoose.model(
  "Blog",
  new mongoose.Schema({
    title: String,
    content: String,
    authorname: String,
    createddate: Date,
    published: Boolean
  })
);

module.exports = Blog;
