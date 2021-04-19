import React, { useState } from 'react'

// OBJECT DESTRUCTURING
// const Button = ({ handleClick, text }) => (
//   <button onClick={handleClick}>
//     {text}
//   </button>
// )

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [value, setValue] = useState(10)

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const setToValue = (newValue) => {
    setValue(newValue)
  }


  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      {value}
      <Button handleClick={() => setToValue(1000)} text='1000' />
      <Button handleClick={() => setToValue(0)} text='0' />
      <Button handleClick={() => setToValue(value + 1)} text='increment' />
    </div>
  )

}
export default App;
