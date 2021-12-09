import React from 'react'

const PersonsDisplay = (props) => {
  //console.log("PERSONS IS", props)
  return (
    <div>
      {props.person.name} {props.person.number}
      <button onClick={() => props.handleDelete(props.person.id)}>delete</button>
    </div>
  )
};

const Persons = (props) => {
  //console.log("Persons component props:",props.persons)
  return (
    <div>
      {props.personsToShow.map(person => <PersonsDisplay key={person.id} person={person} handleDelete={props.handleDelete} />)}
    </div>
  )
};

export default Persons