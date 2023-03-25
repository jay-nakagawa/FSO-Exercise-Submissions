import { useState } from "react"

const Blog = ({blog,user}) => {
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    setVisible(!visible)
  }

  
 
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const buttonStyle = {
    marginLeft: 10
  }
  
  return (
  <div style={blogStyle}>
    <div>
      {blog.title}
      <button style={buttonStyle} onClick={toggleVisible}>{visible? "hide" : "show"}</button>
    </div>
    {visible && 
    <div>
      <div>{blog.author}</div>
      <div>{blog.url}</div>  
      <div>likes = {blog.likes}   </div>
      <div>posted by {blog.user.username || user.username}</div>
      
    </div>}

     
  </div>  
)}

export default Blog