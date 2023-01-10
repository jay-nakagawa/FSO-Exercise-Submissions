import axios from 'axios'
const baseUrl = '/api/persons' 

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => {
    console.log(response)
    return response.data})
  //
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`)
}

// by setting up this modules object within a variable we can avoid errors.
const personService ={ 
  getAll, 
  create, 
  update,
  remove 

}

export default personService