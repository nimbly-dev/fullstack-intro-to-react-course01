import React from "react";

const AverageFeedback = ({ feedbackPositiveCount, feedbackNegativeCount, totalFeedbacks }) => {
    const averageFeedback =
        (feedbackPositiveCount - feedbackNegativeCount) / totalFeedbacks
    return (
        <span>
            Average Feedback: {averageFeedback}
        </span>
    )
}


export default AverageFeedback