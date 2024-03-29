const blogsRouter = require("express").Router();
const Blog = require("../models/blog");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.startsWith("Bearer ")) {
    return authorization.replace("Bearer ", "");
    console.log("authorized");
  }
  return null;
};

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
  console.log("body", body);
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  console.log("token", decodedToken);
  if (!decodedToken.id) {
    return response.status(401).json({ error: "token invalid" });
  }

  // const user = await User.findById(decodedToken.id);
  // console.log("this is user", user);

  let user;
  try {
    user = await User.findById(decodedToken.id);
    console.log("USER!!",user)
  } catch (error) {
    console.error("Error finding user:", error);
    return response.status(500).json({ error: "Error finding user" });
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    user: user.id,
  });

  const savedBlog = await blog.save();
  console.log("this is blog", savedBlog);
  user.blogs = user.blogs.concat(savedBlog._id);
  console.log("user.blogs", user.blogs);
  await user.save(); //!!!!!!!!!!!!!!!!!!!!!!

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
