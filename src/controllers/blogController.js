const blog = require("../models/blog.js");

const indexBlog = async (request, response) => {
  const post = await blog.find({});

  console.log(post);

  return response.render("blog/blog", { post });
};

module.exports = indexBlog;
