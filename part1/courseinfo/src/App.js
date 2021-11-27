import React from 'react'

const Part = (props) =>{
  return(
    <p>{props.part} {props.exercise}</p>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts.part1.name} exercise={props.parts.part1.exercises}/>
      <Part part={props.parts.part2.name} exercise={props.parts.part2.exercises}/>
      <Part part={props.parts.part3.name} exercise={props.parts.part3.exercises}/>
    </div>
  )
};

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts.part1.exercises + props.parts.part2.exercises + props.parts.part3.exercises}</p>
  )
};


const App = () => {

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={{ part1, part2, part3 }}  />
      <Total parts={{ part1, part2, part3 }}/>
    </div>
  )
}

export default App