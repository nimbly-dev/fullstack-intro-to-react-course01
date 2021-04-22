import React from "react";

const PositiveFeedbackAverage = ({ feedbackPositiveCount, totalFeedbacks }) => {
    const positiveFeedbackAverage = (feedbackPositiveCount / totalFeedbacks) * 100
    return (
        <p>
            Positive Feedback Average: {positiveFeedbackAverage}%
        </p>
    )
}

export default PositiveFeedbackAverage