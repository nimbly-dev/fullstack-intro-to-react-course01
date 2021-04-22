import React from "react";

const AverageFeedback = (props) => {
    const averageFeedback =
        (props.feedbackPositiveCount - props.feedbackNegativeCount) / props.totalFeedbacks
    return (
        <p>
            Average Feedback: {averageFeedback}
        </p>
    )
}


export default AverageFeedback