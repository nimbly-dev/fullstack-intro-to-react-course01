import React, { useState } from 'react'

//Components
const Header = () => {
  return (
    <h2>
      Give Feedback
    </h2>
  )
}

const Feedback = (props) => {
  return (
    <div>
      <p>{props.feedbackName}: {props.feedbackCount}</p>
    </div>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h3>Statistics: </h3>
      <Feedback feedbackName={props.feedback[0].name} feedbackCount={props.feedback[0].count} />
      <Feedback feedbackName={props.feedback[1].name} feedbackCount={props.feedback[1].count} />
      <Feedback feedbackName={props.feedback[2].name} feedbackCount={props.feedback[2].count} />
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

/** ============================================================================================*/
//Main App
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  //List of Current Feedbacks in a Array
  const feedbacks = {
    feedback: [
      {
        name: "Good",
        count: good
      },
      {
        name: "Neutral",
        count: neutral
      },
      {
        name: "Count",
        count: bad
      }
    ]
  }

  //Helper Functions
  const handleGoodClick = (newGoodValue) => {
    setGood(newGoodValue)
  }

  const handleNeutralClick = (newNeutralValue) => {
    setNeutral(newNeutralValue)
  }

  const handleBadClick = (newBadValue) => {
    setBad(newBadValue)
  }

  return (
    <div>
      <Header />
      <Button text='Good' handleClick={() => handleGoodClick(good + 1)} />
      <Button text='Neutral' handleClick={() => handleNeutralClick(neutral + 1)} />
      <Button text='Bad' handleClick={() => handleBadClick(bad + 1)} />
      <Statistics feedback={feedbacks.feedback} />
    </div>
  )

}
export default App;
