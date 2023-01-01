import { useState } from 'react'
import Person from "./components/person"
import Filter from "./components/filter"



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('A')

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

    if (persons.find(x=> x.name === personObject.name)){
      alert(`${personObject.name} is already in the phonebook`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
   
  }
  

   let filteredPeople = persons.filter((person)=>
   
   person.name.toLowerCase().includes(newFilter.toLowerCase()))
    console.log(filteredPeople)

  console.log(Object.values(persons))
  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newName={newFilter} handleFilterChange={handleFilterChange}/>
      
      <h2>Add a Person</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      
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