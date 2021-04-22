import React from "react";

const PositiveFeedbackAverage = (props) => {
    const positiveFeedbackAverage = (props.feedbackPositiveCount / props.totalFeedbacks) * 100
    return (
        <p>
            Positive Feedback Average: {positiveFeedbackAverage}%
        </p>
    )
}

export default PositiveFeedbackAverage