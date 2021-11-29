import React, { useState } from 'react'

const Header = (props) => {
  //console.log(props)
  return (
    <h1>{props.title}</h1>
  )
};

const Button = (props) => {
  return (<button onClick={props.counter}>
    <p>{props.text}</p>
  </button>)
};

const Statistics = (props) => {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const title = "give feedback";
  const subTitle = "statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const counterGood = () => setGood(good + 1);
  const counterNeutral = () => setNeutral(neutral + 1);
  const counterBad = () => setBad(bad + 1);

  return (
    <div>
      <Header title={title} />
      <Button counter={counterGood} text="good" />
      <Button counter={counterNeutral} text="neutral" />
      <Button counter={counterBad} text="bad" />
      <Header title={subTitle} />
      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App
