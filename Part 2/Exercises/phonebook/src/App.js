import { useState } from 'react'


const Person = ({ person }) => {
  return <div>{person.name}</div>;
};


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    const personObject = {
      name: newName,  //key must be same as existing key
     
      id: persons.length + 1,
    }

    if (persons.find(x=> x.name === personObject.name)){
      alert(`${personObject.name} is already in the phonebook`)
    }else{
      setPersons(persons.concat(personObject))
      setNewName('')
    }
   
  }

  console.log(Object.values(persons))
  return (
    <div>
      <h2>Phonebook</h2>
      
      <form onSubmit={addName}>
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
       
      {persons.map((person) => (
          <Person key={person.name} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App