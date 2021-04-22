import React from "react";

const PositiveFeedbackAverage = ({ feedbackPositiveCount, totalFeedbacks }) => {
    const positiveFeedbackAverage = (feedbackPositiveCount / totalFeedbacks) * 100
    return (
        <span>
            Positive Feedback Average: {positiveFeedbackAverage}%
        </span>
    )
}

export default PositiveFeedbackAverage