import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(baseUrl, newObject, config)
  console.log(response)
 console.log(response.data)
  return response.data
}

const update = (id,updatedBlogObject) => {
  const request = axios.put(`${baseUrl}/${id}`,updatedBlogObject)
  
  return request.then(response =>response.data)
}

const deleteBlog = (id) => { 
 const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}



// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken,create, update , deleteBlog}