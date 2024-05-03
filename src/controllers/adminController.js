const blog = require("../models/blog.js");

const indexAdmin = async (request, response) => {
  return await response.render("admin/index");
};

const loginAdmin = async (request, response) => {
  const { email, senha } = request.body;

  if (email === "jhonatan.tec@gmail.com" && senha === "123") {
    return response.render("admin/dashboard");
  } else {
    response.status(500).json({ message: "Login inválido!" });
  }
};

const createAdmin = async (request, response) => {
  const { title, author, body } = request.body;

  const post = await blog.create({
    title,
    author,
    body,
  });

  console.log(post);

  return response.redirect("/blog");
};

const dashboard = async (request, response) => {
  const post = await blog.find({});

  console.log(post);

  return response.render("admin/dashboard", { post });
};

(module.exports = indexAdmin), loginAdmin, createAdmin, dashboard;
