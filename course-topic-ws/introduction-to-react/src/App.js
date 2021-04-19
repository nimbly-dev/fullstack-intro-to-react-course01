import './App.css';

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
    </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}


const App = () => {
  const name = 'Steve'
  const age = 20

  console.log('Hello from component')
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Altheo" age="21" />
      <Hello name="Chukoy" age="?" />
      <Hello name={name} age={age} />
    </div>
  )
}
export default App