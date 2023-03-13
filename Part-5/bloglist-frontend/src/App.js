import { useState, useEffect } from "react";
import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";
import Notification from "./components/Notification";
import blogService from "./services/blogs";
import loginService from "./services/login";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  useEffect(() => {
    blogService.getAll().then((blogs) => setBlogs(blogs));
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogappUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      console.log(user)
      blogService.setToken(user.token);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log("logging in with", username, password);

    try {
      const user = await loginService.login({
        username,
        password,
      });
      
      window.localStorage.setItem("loggedBlogappUser", JSON.stringify(user));
      setUser(user);
      console.log(user);
      setUsername("");
      setPassword("");
      setMessage("success");
    } catch (exception) {
      console.log("error");
      setMessage("Wrong credentials");
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
  };

  const addBlog = (event) => {
    event.preventDefault();
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    };

    console.log(blogObject);

    blogService.create(blogObject).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog));
      setNewTitle("");
      setNewAuthor("");
      setNewUrl("")
      setMessage("new blog added");
    });
  };


  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(false);
  };

  const loginForm = () => (
    <form onSubmit={handleLogin}>
      <div>
        username
        <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
  );

  // const blogForm = () => (
  //   <form onSubmit={addBlog}>
  //     <h2>add a blog</h2>
  //     <div>
  //       title:
  //       <input
  //         value={newTitle}
  //         name="Title"
  //         onChange={({ target }) => setNewTitle(target.value)}
  //       />
  //     </div>
  //     <div>
  //       author:
  //       <input
  //         value={newAuthor}
  //         name="Author"
  //         onChange={({ target }) => setNewAuthor(target.value)}
  //       />
  //     </div>
  //     <div>
  //       url:
  //       <input
  //         value={newUrl}
  //         name="Url"
  //         onChange={({ target }) => setNewUrl(target.value)}
  //       />
  //     </div>
  //     <button type="submit">save</button>
  //   </form>
  // );

 

  const blogList = () =>
    blogs.map((blog) => <Blog key={blog.id} blog={blog} />);

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} />
      {user === null && loginForm()}
      {user !== null && (
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>logout</button>
          <BlogForm
            handleTitleChange = {({target}) => setNewTitle(target.value)}
            handleAuthorChange = {({target}) => setNewAuthor(target.value)}
            handleUrlChange = {({target}) => setNewUrl(target.value)}
            addBlog = {addBlog}
          />
          {blogList()}
        </div>
      )}
    </div>
  );
};

export default App;
