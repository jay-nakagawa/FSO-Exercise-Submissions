const blogsRouter = require("express").Router();
const Blog = require("../models/blog");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({});
  response.json(blogs);
});

blogsRouter.post("/", async (request, response,next) => {
  const blog = new Blog(request.body);
  try{
  const newBlog = await blog.save();
  response.status(201).json(newBlog);
  } catch(exception){
    response.status(400).end()
    next(exception)
  }
});

module.exports = blogsRouter;
