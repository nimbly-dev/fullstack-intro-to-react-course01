import React from "react"

const PopularAnecdote = (props) => {
    return (
        <div>
            <h2>Most Popular Anecdote: </h2>

            <p>{props.anecdotes}</p>

            <p> HAS: {props.voteValue} votes </p>

        </div>
    )
}

export default PopularAnecdote