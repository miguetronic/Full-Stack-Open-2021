import React from 'react'

const PersonsDisplay = (props) => {
  //console.log("PERSONS IS", props)
  return (
    <p>{props.person.name} {props.person.number}</p>
  )
};

const Persons = (props) => {
  //console.log("Persons component props:",props.persons)
  return (
    <div>
      {props.personsToShow.map(person => <PersonsDisplay key={person.id} person={person} />)}
    </div>
  )
};

export default Persons