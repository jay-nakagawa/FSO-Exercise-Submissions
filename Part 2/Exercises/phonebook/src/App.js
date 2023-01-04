import { useState, useEffect } from "react";
import Person from "./components/person";
import Filter from "./components/filter";
import Form from "./components/form";

import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([
    // { name: 'Arto Hellas', number: '040-123456', id: 1 },
    // { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    // { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    // { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [successMessage, setSuccessMessage] = useState(null)

  //delete
  const removePerson = (id) => {
    // console.log(person)
    if(window.confirm('Confirm entry deletion')){
      personService.remove(id).then(() => {
        const updatedPersons = persons.filter((person) => {
          console.log(person.id, id);
          return person.id !== id;
        });
        console.log(updatedPersons);
  
        setPersons(updatedPersons);
      });
    }
  
  };

  useEffect(() => {
    console.log("effect");
    personService.getAll().then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    // console.log(event.target.value);
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    // console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleFilterChange = (event) => {
    // console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  //add person
  const addPerson = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const personObject = {
      name: newName, //key must be same as existing key
      number: newNumber,
      id: persons.length + 1,
    };

    
    const nameToChange =  persons.find((x) => x.name === personObject.name)
    // console.log(nameToChange)
    // console.log(personObject);
    if (nameToChange) {
     if(window.confirm(`${nameToChange.name} is already in the phonebook, replace old number with a new one?`)){
      personService
      .update(nameToChange.id,personObject)
      .then((response)=>{

        let newPerson = response.data
        setPersons(persons.map(person => {
          if (person.id === newPerson.id) return newPerson
          return person
        }))
      })
    }
      // alert(`${personObject.name} is already ipersonObjectan the phonebook`);
    } else {
      personService //add a person
        .create(personObject)
        .then((response) => {
          console.log(`response data ${response.data}`);
          console.log(`object ${personObject}`); //does this matter?
          setPersons(persons.concat(response.data));
          setSuccessMessage(`Added ${personObject.name} to phonebook`)
          setTimeout(()=>{
            setSuccessMessage(null)
          },5000)
          setNewName("");
          setNewNumber("");
        });
    }
  };

  let filteredPeople = persons.filter((person) => {
    // console.log({ person });
    return person.name?.toLowerCase().includes(newFilter.toLowerCase());
  });

  // console.log(filteredPeople);
  // console.log(Object.values(persons));
 
  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='success'>
        {message}
      </div>
    )
  }
 
  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={successMessage} />
      <Filter newName={newFilter} handleFilterChange={handleFilterChange} />

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
          <Person
            key={person.name}
            person={person}
            removePerson={() => removePerson(person.id, person.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
