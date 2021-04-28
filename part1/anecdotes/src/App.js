import React, { useState } from 'react'

//Import components
import Button from "./components/Button.js"
import Anecdotes from "./components/Anecdotes.js"
import PopularAnecdotes from "./components/PopularAnecdote.js"

const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  //zero-filled array initialization
  const initValue = new Array(anecdotes.length).fill(0);

  const [selected, setSelected] = useState(0)
  const [voteValue, setVote] = useState(initValue)
  const [popularAnecdote, setPopularAnecdote] = useState(0)

  const giveRandomAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random)
  }

  const addVote = () => {
    const newVote = { ...voteValue }
    newVote[selected]++;
    if (newVote[popularAnecdote] < newVote[selected]) {
      setPopularAnecdote(selected)
    }
    setVote(newVote)
  }

  return (
    <div>
      <Anecdotes anecdotes={anecdotes[selected]} voteValue={voteValue[selected]} />
      <Button name="Vote anecdote" handleClick={() => addVote(voteValue + 1)} />
      <Button name="Next anecdote" handleClick={() => giveRandomAnecdote()} />
      <PopularAnecdotes anecdotes={anecdotes[popularAnecdote]} voteValue={voteValue[popularAnecdote]} />
    </div>
  )
}

export default App