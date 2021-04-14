import React from 'react'

const Part = (props) => {
  return (
    <p>
      * {props.partName} {props.exerciseName}
    </p>
  )
}

const Header = (props) => {
  return (
    <h1>
      {props.course}
    </h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part partName={props.part1} exerciseName={props.exercise1} />
      <Part partName={props.part2} exerciseName={props.exercise2} />
      <Part partName={props.part3} exerciseName={props.exercise3} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      <hr />
      Number of exercise {props.exercise1 + props.exercise2 + props.exercise3}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'

  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content
        part1={parts[0].name} exercise1={parts[0].exercises}
        part2={parts[1].name} exercise2={parts[1].exercises}
        part3={parts[2].name} exercise3={parts[2].exercises} />
      <Total
        exercise1={parts[0].exercises}
        exercise2={parts[1].exercises}
        exercise3={parts[2].exercises} />
    </div>
  )
}

export default App;
