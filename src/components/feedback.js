import { Component } from 'react'
import Statistics from './statistics'
import FeedbackOptions from './FeedbackOptions'
import Section from './section'

class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
 
    handleGood = (e =>
        this.setState({
            good: this.state.good + 1
        })
    )

    handleBad = ( e => 
        this.setState({
            bad: this.state.bad + 1
        })
    )

    handleFeedback = (e => {
        if(e.currentTarget.name === "neutral") {
            this.setState({
            neutral: this.state.neutral + 1
         })
        }

        if(e.currentTarget.name === "bad") {
            this.setState({
            bad: this.state.bad + 1
         })
        }

        if(e.currentTarget.name === "good") {
            this.setState({
            good: this.state.good + 1
         })
        }
    })

    countTotalFeedback = () => {
        return this.state.good + this.state.bad + this.state.neutral
    }

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good / this.countTotalFeedback() * 100) || 0
    }

    render() {
        return(
            <div>
                <Section title="Please leave a feedback" />
                <FeedbackOptions onLeaveFeedback={this.handleFeedback} />
                
                <Section title="Statistics" />
                <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} />
            
            </div>
        )
    }
}

export default Feedback