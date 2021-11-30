import React, { useState } from 'react'

const Anecdote = ({ selected, anecdotes }) => {
  return (
    <p>{anecdotes[selected]}</p>
  )
};

const DisplayVotes = ({ selected, votes }) => {
  console.log("Votes current:", selected)
  return (
    <p>has {votes[selected]} votes</p>
  )
};

const Button = (props) => {
  return (
    <button onClick={props.action}>
      {props.text}
    </button>
  )
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, updateVotes] = useState(Array(anecdotes.length).fill(0))

  const randomClick = () => {
    const max = anecdotes.length
    const min = 0
    const randomNumber = parseInt(Math.random() * (max - min) + min)
    //console.log(anecdotes.length)
    //console.log(anecdotes)
    console.log(randomNumber)
    setSelected(randomNumber)
  }

  const votesCounter = () => {
    //console.log("Selected is",selected)
    //console.log("votes before updated:", votes)
    let copyVotes = [...votes]
    copyVotes[selected] +=1
    //console.log("copyvotes:", copyVotes)
    updateVotes(copyVotes)
    //console.log("votes updated:", votes)
  }

  return (
    <div>
      <Anecdote selected={selected} anecdotes={anecdotes} />
      <DisplayVotes selected={selected} votes={votes}/>
      <Button action={votesCounter} text="vote" />
      <Button action={randomClick} text="next anecdote" />
    </div>
  )
}

export default App