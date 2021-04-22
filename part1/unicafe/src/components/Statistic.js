import React from "react";

const Statistic = ({ feedbackName, feedbackCount }) => {
    return (
        <div>
            <span>{feedbackName}: {feedbackCount}</span>
        </div>
    )
}



export default Statistic