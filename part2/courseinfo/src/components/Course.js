import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course.name}</h1>
    )
}

const Total = ({ course }) => {

    const TotalExercises = course.parts.reduce((sum, exercise) => {
        //console.log("what is happening", sum, exercise.exercises)
        return sum + exercise.exercises
    }, 0)
    //console.log("la suma es",TotalExercises)
    return (
        <p> <strong> total of {TotalExercises} exercises </strong> </p>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Content = ({ course }) => {
    return (
        <div>
            {course.parts.map(part => <Part key={part.id} part={part} />)}
        </div>
    )
}

const Course = (props) => {
    return (
        <div>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course} />
        </div>
    )
};


export default Course