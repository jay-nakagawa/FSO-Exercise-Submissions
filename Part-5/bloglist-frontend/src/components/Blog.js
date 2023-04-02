import { useState } from "react";

const Blog = ({ blog, user, updateLikes, deleteBlog }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const handleLikes = () => {
    const updatedBlogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    };
    console.log("blog", blog);
    console.log("updated", updatedBlogObject);

    updateLikes(blog.id, updatedBlogObject);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      deleteBlog(blog.id);
    }
  };

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: "solid",
    borderWidth: 1,
    marginBottom: 5,
  };

  const buttonStyle = {
    marginLeft: 10,
  };

  return (
    <div style={blogStyle}>
      <div className="title">
        {blog.title} written by {blog.author}
        <button style={buttonStyle} onClick={toggleVisible}>
          {visible ? "hide" : "show"}
        </button>
      </div>
      {visible && (
        <div>
          <div className="url">{blog.url}</div>
          <div>
            likes = {blog.likes}
            <button onClick={handleLikes} style={buttonStyle}>
              like
            </button>
          </div>
          <div>posted by {blog.user.username || user.username}</div>
          {blog.user.username === user.username && (
            <button style={buttonStyle} onClick={handleDelete}>
              delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Blog;
