import React from "react";

const Statistic = ({ feedbackName, feedbackCount }) => {
    return (
        <div>
            <p>{feedbackName}: {feedbackCount}</p>
        </div>
    )
}



export default Statistic