import React, { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchPersons, setSearchPersons] = useState('')

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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
      //id: persons.length + 1
    }
    axios
      .post('http://localhost:3001/persons', nameObject)
      .then(response => {
        console.log(response)
        setPersons(persons.concat(response.data));
        setNewName('');
        setNewNumber('');
      })


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