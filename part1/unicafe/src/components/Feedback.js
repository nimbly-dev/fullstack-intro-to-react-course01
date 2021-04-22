import React from "react";

const Feedback = (props) => {
    return (
        <div>
            <p>{props.feedbackName}: {props.feedbackCount}</p>
        </div>
    )
}



export default Feedback