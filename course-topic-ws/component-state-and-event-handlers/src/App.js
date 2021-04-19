import React, { useState } from 'react'

const Display = ({ counter }) => { <div>{counter}</div> }

const Button = ({ handleClick, text }) => { <button onClick={handleClick}>{text}</button> }

const App = () => {
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  // )

  return (
    <div>
      <Display counter={counter} />
      <Button
        handleClick={increaseByOne}
        text='plus'
      />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />
      <Button
        handleClick={setToZero}
        text='zero'
      />
    </div>
  )
}


export default App;


/*UNUSED CODE

// const Hello = (props) => {
//   const { name, age } = props

//   const bornYear = () => new Date().getFullYear() - age

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )
// }

// const App = (props  ) => {
//   const name = 'Peter'
//   const age = 10

//   const { counter } = props

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//       <div>{counter}</div>
//     </div>
//   )
// }*/