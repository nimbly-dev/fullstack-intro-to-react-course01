import React from "react";

//Imports component with same level of hierarchy
import Feedback from "./Feedback.js"

//Imports sub or child components
import AverageFeedback from "./statistics_components/AverageFeedback.js"
import FeedBackCount from "./statistics_components/FeedbackCount.js"
import PositiveFeedbackAverage from "./statistics_components/PositiveFeedbackAverage.js"

const Statistics = (props) => { // NEEDS IMPROVEMENT
    if (props.feedback[0].count === 0
        && props.feedback[1].count === 0
        && props.feedback[2].count === 0) {
        return (
            <p>No feedback is currently given</p>
        )
    } else {
        return (
            <div>
                <h3>Statistics: </h3>
                <Feedback feedbackName={props.feedback[0].name} feedbackCount={props.feedback[0].count} />
                <Feedback feedbackName={props.feedback[1].name} feedbackCount={props.feedback[1].count} />
                <Feedback feedbackName={props.feedback[2].name} feedbackCount={props.feedback[2].count} />
                <FeedBackCount
                    totalFeedback={props.feedback[0].count + props.feedback[1].count + props.feedback[2].count}
                />
                <AverageFeedback
                    feedbackPositiveCount={props.feedback[0].count}
                    feedbackNegativeCount={props.feedback[2].count}
                    totalFeedbacks={props.feedback[0].count + props.feedback[1].count + props.feedback[2].count}
                />
                <PositiveFeedbackAverage
                    feedbackPositiveCount={props.feedback[0].count}
                    feedbackNegativeCount={props.feedback[2].count}
                    totalFeedbacks={props.feedback[0].count + props.feedback[1].count + props.feedback[2].count}
                />
            </div>
        )
    }
}


export default Statistics