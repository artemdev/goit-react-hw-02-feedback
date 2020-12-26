import { Component } from 'react'
import FeedbackOptions from './FeedbackOptions'
import Section from './section'

class Feedback extends Component {

   




    render() {
        return(
            <div>
                <Section title="Please leave a feedback"  className="feddback">
                    <FeedbackOptions onLeaveFeedback={this.props.handleFeedback} />
                </Section>
            </div>
        )
    }
}

export default Feedback