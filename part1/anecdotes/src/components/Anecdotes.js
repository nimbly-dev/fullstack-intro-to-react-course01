import React from 'react'

const Anecdote = (props) => {
    return (
        <p>
            <span>{props.anecdotes}</span>
            <span><h3>HAS: {props.voteValue} votes</h3></span>
        </p>
    )
}

export default Anecdote