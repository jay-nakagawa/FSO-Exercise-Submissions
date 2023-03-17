const BlogForm = ({
  handleUrlChange,
  handleAuthorChange,
  handleTitleChange,
  newTitle,
  newAuthor,
  newUrl,
  addBlog
}) => (
    <form onSubmit={addBlog}>
      <h2>add a blog</h2>
      <div>
        title:
        <input
          value={newTitle}
          name="Title"
          onChange={handleTitleChange}
        />
      </div>
      <div>
        author:
        <input
          value={newAuthor}
          name="Author"
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        url:
        <input
          value={newUrl}
          name="Url"
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit" >save</button>
    </form>
  );

  export default BlogForm