import { useState } from "react";

const BlogForm = ({ addBlog }) => {
  const [newAuthor, setNewAuthor] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");

  // handleTitleChange = {({target}) => setNewTitle(target.value)}
  // handleAuthorChange = {({target}) => setNewAuthor(target.value)}
  // handleUrlChange = {({target}) => setNewUrl(target.value)}

  const createBlog = (event) => {
    event.preventDefault();
    const blogObject = {
      title: newTitle,
      author: newAuthor,
      url: newUrl,
    };

    console.log(blogObject);
    addBlog(blogObject);
    setNewTitle("");
    setNewAuthor("");
    setNewUrl("");
  };

  return (
    <form onSubmit={createBlog}>
      <h2>add a blog</h2>
      <div>
        title:
        <input
          id="title"
          value={newTitle}
          name="Title"
          onChange={({ target }) => setNewTitle(target.value)}
        />
      </div>
      <div>
        author:
        <input
          id="author"
          value={newAuthor}
          name="Author"
          onChange={({ target }) => setNewAuthor(target.value)}
        />
      </div>
      <div>
        url:
        <input
          id="url"
          value={newUrl}
          name="Url"
          onChange={({ target }) => setNewUrl(target.value)}
        />
      </div>
      <button type="submit" id="save">save</button>
    </form>
  );
};

export default BlogForm;
