import React from "react";

const AverageFeedback = ({ feedbackPositiveCount, feedbackNegativeCount, totalFeedbacks }) => {
    const averageFeedback =
        (feedbackPositiveCount - feedbackNegativeCount) / totalFeedbacks
    return (
        <p>
            Average Feedback: {averageFeedback}
        </p>
    )
}


export default AverageFeedback