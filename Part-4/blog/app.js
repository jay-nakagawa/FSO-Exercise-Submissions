const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const loginRouter = require('./controllers/login')
const blogsRouter = require("./controllers/blogs");
const usersRouter = require('./controllers/users')
//testing source control11
const logger = require("./utils/logger");
const mongoose = require("mongoose");

const url = config.MONGODB_URI;

mongoose
  .connect(url)
  .then((result) => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use('/api/login', loginRouter)
app.use("/api/blogs", blogsRouter);
app.use('/api/users', usersRouter)

module.exports = app;
