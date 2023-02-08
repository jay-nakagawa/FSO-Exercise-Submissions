const mongoose = require("mongoose");
const supertest = require("supertest");
const { response } = require("../app");
const app = require("../app");
const Blog = require("../models/blog");

const api = supertest(app);

const initialBlogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 10,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

beforeEach(async () => {
  await Blog.deleteMany({});
  let blogObject = initialBlogs.map((blog) => new Blog(blog));
  const promiseArray = blogObject.map((blog) => blog.save());
  await Promise.all(promiseArray);
});

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("returned blogs have correct length", async () => {
  const response = await api.get("/api/blogs");

  expect(response.body).toHaveLength(initialBlogs.length);
});

test("blogs have id property", async () => {
  const response = await api.get("/api/blogs");
  console.log(response.body);
  arrId = response.body.map((blog) => blog.id);
  expect(arrId).toHaveLength(initialBlogs.length);
});

test("blog count increases by one after post req", async () => {
  const newBlog = {
    title: "Type wars",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
  };
  await api.post("/api/blogs").send(newBlog).expect(201);

  const updatedBlogs = await api.get("/api/blogs");

  expect(updatedBlogs.body).toHaveLength(initialBlogs.length + 1);
});

test("if no value is given for likes then default to zero", async () => {
  const newBlog = {
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
  };

  await api.post("/api/blogs").send(newBlog);

  const response = await api.get("/api/blogs");
  const newBlogPost = response.body[response.body.length - 1];
  expect(newBlogPost.likes).toEqual(0);
});

test("400 if no title or url", async () => {
  const newBlog = {
    author: "Robert C. Martin",
  };

  await api.post("/api/blogs").send(newBlog).expect(400);
});

test("a Blog can be deleted", async () => {
  const response = await api.get("/api/blogs");
  const blogToDelete = response.body[0];
  console.log("delete", blogToDelete);
  await api.delete(`/api/blogs/${blogToDelete.id}`).expect(204);

  const blogsAtEnd = await (await api.get("/api/blogs")).body;

  expect(blogsAtEnd).toHaveLength(initialBlogs.length - 1);
});

test("a Blog can be updated", async () => {
  
  const response = await api.get("/api/blogs");
  const blogToUpdate = response.body[0]
  console.log(blogToUpdate)
  await api.put(`/api/blogs/${blogToUpdate.id}`)
  .send({title: "put req test",likes: 111})
  .expect(200)

  

  
});

afterAll(async () => {
  await mongoose.connection.close();
});
