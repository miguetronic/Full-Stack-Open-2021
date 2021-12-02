import React from 'react'

const PersonForm = (props) => {
    const addPerson = props.addPerson
    const handleNewName = props.handleNewName
    const handleNewNumber = props.handleNewNumber
    const newName = props.newName
    const newNumber = props.newNumber
    return (
      < form onSubmit={addPerson} >
        <div>
          name: <input onChange={handleNewName} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNewNumber} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form >
    )
  };

export default PersonForm