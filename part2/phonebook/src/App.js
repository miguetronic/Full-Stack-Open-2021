import React, { useState } from 'react'

const PersonsDisplay = (props) => {
  //console.log("PERSONS IS", props)
  return (
    <p>{props.person.name} {props.person.number}</p>
  )
};

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
    console.log("Search person is:", event.target.value);
    setSearchPersons(event.target.value)
  }

  const handleNewName = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value);
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
      <div>
        filter shown with <input onChange={handleSearchPerson} value={searchPersons} />
      </div>

      <h2>add a new</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {personsToShow.map(person => <PersonsDisplay key={person.id} person={person} />)}
      </div>
    </div>
  )
}

export default App