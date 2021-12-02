import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPersons, setSearchPersons] = useState('')

  const handleSearchPerson = (event) => {
    //console.log("Search person is:", event.target.value);
    setSearchPersons(event.target.value)
  }

  const handleNewName = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    //console.log("event is:", event.target.value)
    if (persons.some(person => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`)
    }
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
    setPersons(persons.concat(nameObject));
    setNewName('');
    setNewNumber('');
  }

  const personsToShow = (searchPersons === "")
    ? [...persons]
    : persons.filter(person => person.name.toLowerCase().includes(searchPersons))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleSearchPerson={handleSearchPerson} searchPersons={searchPersons} />

      <h3>add a new</h3>

      <PersonForm
        addPerson={addPerson}
        handleNewName={handleNewName}
        newName={newName}
        handleNewNumber={handleNewNumber}
        newNumber={newNumber}
      />

      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />

    </div>
  )
}

export default App