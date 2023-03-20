import { useState } from "react"

const Blog = ({blog}) => {
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
  
  return (
  <div style={blogStyle}>
    <div>
      {blog.title}
      <button onClick={toggleVisible}>{visible? "hide" : "show"}</button>
    </div>
    {visible && 
    <div>
      {blog.author} {blog.likes} {blog.url}
    </div>}
     
  </div>  
)}

export default Blog