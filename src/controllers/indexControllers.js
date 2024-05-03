const blog = require("../models/blog.js");

const index = async (request, response) => {
  const post = await blog.find({}).sort({ date: -1 }).limit(3);

  return response.render("index", { post });
};

module.exports = index;
