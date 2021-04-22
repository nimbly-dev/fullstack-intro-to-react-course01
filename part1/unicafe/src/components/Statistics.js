import React from "react";

//Imports component with same level of hierarchy
import Statistic from "./Statistic.js"

//Imports sub or child components
import AverageFeedback from "./statistics_components/AverageFeedback.js"
import FeedBackCount from "./statistics_components/FeedbackCount.js"
import PositiveFeedbackAverage from "./statistics_components/PositiveFeedbackAverage.js"

const Statistics = ({ feedback }) => { // NEEDS IMPROVEMENT
    if (feedback[0].count === 0
        && feedback[1].count === 0
        && feedback[2].count === 0) {
        return (
            <p>No feedback is currently given</p>
        )
    } else {
        return (
            <table>
                <tr>
                    <td><Statistic feedbackName={feedback[0].name} feedbackCount={feedback[0].count} /></td>
                </tr>
                <tr>
                    <td><Statistic feedbackName={feedback[1].name} feedbackCount={feedback[1].count} /></td>
                </tr>
                <tr>
                    <td><Statistic feedbackName={feedback[2].name} feedbackCount={feedback[2].count} /></td>
                </tr>
                <tr>
                    <td>
                        <FeedBackCount
                            totalFeedback={feedback[0].count + feedback[1].count + feedback[2].count}
                        />
                    </td>

                </tr>
                <tr>
                    <td>
                        <AverageFeedback
                            feedbackPositiveCount={feedback[0].count}
                            feedbackNegativeCount={feedback[2].count}
                            totalFeedbacks={feedback[0].count + feedback[1].count + feedback[2].count}
                        />
                    </td>

                </tr>
                <tr>
                    <td>
                        <PositiveFeedbackAverage
                            feedbackPositiveCount={feedback[0].count}
                            feedbackNegativeCount={feedback[2].count}
                            totalFeedbacks={feedback[0].count + feedback[1].count + feedback[2].count}
                        />
                    </td>
                </tr>
            </table>
        )
    }
}


export default Statistics