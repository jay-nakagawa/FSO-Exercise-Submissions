const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", {
    username: 1,
    name: 1,
    id: 1,
  });
  response.json(blogs);
});

blogsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  const user = await User.findById(body.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    user: user.id,
  });
  console.log(blog)
  const savedBlog = await blog.save();
  user.blogs = user.notes.concat(savedBlog.id);
  await user.save;
  response.status(201).json(savedBlog);

  // const blog = new Blog(request.body);
  // try {
  //   const newBlog = await blog.save();
  //   response.status(201).json(newBlog);
  // } catch (exception) {
  //   response.status(400).end();
  //   next(exception);
  // }
});

blogsRouter.delete("/:id", async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id);
    response.status(204).end();
  } catch (exception) {
    next(exception);
  }
});

blogsRouter.put("/:id", async (request, response, next) => {
  const blog = request.body;

  Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    .then((updatedBlog) => {
      response.json(updatedBlog);
    })
    .catch((error) => next(error));
});

module.exports = blogsRouter;
