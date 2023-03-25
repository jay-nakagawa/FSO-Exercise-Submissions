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
      {blog.author} {blog.likes} {blog.url} {blog.user.username || user.username}
      <div>{console.log(blog.user.username)}
      {console.log(user.username.length)}
      {console.log(user.username.length)}
     
      
      </div>
    </div>}

     
  </div>  
)}

export default Blog