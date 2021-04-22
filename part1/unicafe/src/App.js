import React, { useState } from 'react'

//Imports Components
import Statistics from "./components/Statistics.js";
import Header from "./components/Header.js";
import Button from "./components/Button.js";



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
        name: "Bad",
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
