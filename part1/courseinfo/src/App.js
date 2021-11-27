import React from 'react'

const Part = (props) =>{
  return(
    <p>{props.part} {props.exercise}</p>
  )
}

const Header = (props) => {
  //console.log(props)
  return (
    <h1>{props.course}</h1>
  )
};

const Content = (props) => {
  //console.log(props)
  const [part1, part2, part3] = props.parts
  //console.log(part1, part2, part3)
  return (
    <div>
      <Part part={part1.name} exercise={part1.exercises}/>
      <Part part={part2.name} exercise={part2.exercises}/>
      <Part part={part3.name} exercise={part3.exercises}/>
    </div>
  )
};

const Total = (props) => {
  const [part1, part2, part3] = props.parts
  return (
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
};


const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts}/>
    </div>
  )
}

export default App