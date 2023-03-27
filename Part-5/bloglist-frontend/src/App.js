import { useState, useEffect, useRef } from "react";

import Blog from "./components/Blog";
import BlogForm from "./components/BlogForm";

import LoginForm from "./components/LoginForm";
import Notification from "./components/Notification";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Togglable from "./components/Togglable";



const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);

  // const [blogVisible, setBlogVisible] = useState(false) 


  // const [newAuthor, setNewAuthor] = useState("");
  // const [newTitle, setNewTitle] = useState("");
  // const [newUrl, setNewUrl] = useState("");

  const blogFormRef = useRef()

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

  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload(false);
  };

  const addBlog = (blogObject) => {



    blogService.create(blogObject).then((returnedBlog) => {
      setBlogs(blogs.concat(returnedBlog));
      setMessage("new blog added");
      setTimeout(() => {
        setMessage(null);
      }, 5000);

    });
    blogFormRef.current.toggleVisibility()
  };


  const updateLikes = async (id, updatedBlog) => {
    try {
      const response = await blogService.update(id, updatedBlog);
      setMessage("Liked post")
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      setBlogs(
        blogs.map((blog) => (blog.id === response.id ? response : blog))
      );
    } catch (exception) {
      setMessage("error" + exception.response.data.error);
    }
  };

const deleteBlog = async (id) => {
  try{
    await blogService.deleteBlog(id)
    setMessage("deleted blog")
    setTimeout(() => {
      setMessage(null);
    }, 5000);
    setBlogs(blogs.filter((blog) => blog.id !== id));
  } catch (exception) {
    setMessage("error" + exception.response.data.error);
  }
}










  // const addBlog = (event) => {
  //   event.preventDefault();
  //   const blogObject = {
  //     title: newTitle,
  //     author: newAuthor,
  //     url: newUrl,
  //   };

  //   console.log(blogObject);
  //   blogFormRef.current.toggleVisibility()

  //   blogService.create(blogObject).then((returnedBlog) => {
  //     setBlogs(blogs.concat(returnedBlog));
  //     setNewTitle("");
  //     setNewAuthor("");
  //     setNewUrl("")
  //     setMessage("new blog added");
  //   });
  // };




  const blogList = () =>
    blogs.sort((a, b) => b.likes - a.likes)
      .map((blog) => <Blog user={user} key={blog.id} blog={blog} updateLikes={updateLikes} deleteBlog={deleteBlog} />
      );

  return (
    <div>
      <h2>blogs</h2>
      <Notification message={message} />
      {!user &&
        <Togglable buttonLabel="log in">
          <LoginForm
            username={username}
            password={password}
            handleUsernameChange={({ target }) => setUsername(target.value)}
            handlePasswordChange={({ target }) => setPassword(target.value)}
            handleSubmit={handleLogin}
          />
        </Togglable>
      }
      {user !== null && (
        <div>
          <p>{user.name} logged in</p>
          <button onClick={handleLogout}>logout</button>
          <Togglable buttonLabel="new blog" ref={blogFormRef}>
            <BlogForm
              addBlog={addBlog}
            />
          </Togglable>


          {blogList()}
        </div>
      )}
    </div>
  );
};

export default App;
