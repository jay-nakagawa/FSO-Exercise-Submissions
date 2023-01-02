import { useState, useEffect } from 'react'
import Person from "./components/person"
import Filter from "./components/filter"
import Form from "./components/form"
import axios from 'axios'



const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }  

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,  //key must be same as existing key
      number: newNumber,
      id: persons.length + 1,
    }
    console.log(personObject)
    if (persons.find(x=> x.name === personObject.name)){
      alert(`${personObject.name} is already in the phonebook`)
    }else{

      axios //add a person
      .post('http://localhost:3001/persons', personObject)
      .then(response => {
        console.log(`response data ${response.data}`)
        console.log(`object ${personObject}`) //does this matter?
        setPersons(persons.concat(response.data))

        setNewName('')
        setNewNumber('')
      })


      // setPersons(persons.concat(personObject))
      
    }
   

  }
  

   let filteredPeople = persons.filter((person)=>
   
   person.name.toLowerCase().includes(newFilter.toLowerCase()))
    console.log(filteredPeople)

  console.log(Object.values(persons))
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        newName={newFilter} 
        handleFilterChange={handleFilterChange}/>
      
      <h2>Add a Person</h2>
      <Form 
        addPerson={addPerson} 
        handleNameChange={handleNameChange} 
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
        />
      
      
      <h2>Numbers</h2>
      <div>
      <div>debug: {newName}</div>
       
   

      {filteredPeople.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App