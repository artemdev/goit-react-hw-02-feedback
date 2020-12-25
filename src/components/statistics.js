import { Component } from 'react'
import Section  from './section.js'
import Notification from './notification.js'

class Statistics extends Component {
    countTotalFeedback = () => {
        return this.props.state.good + this.props.state.bad + this.props.state.neutral
      }

    countPositiveFeedbackPercentage = () => {
        return Math.round(this.props.state.good / this.countTotalFeedback() * 100) || 0
    }

    render() {
        if(this.countTotalFeedback() <= 0) {
            return(<Notification message="No feedback given" />)
        }
        else {
            return(               
                    <Section title="Statistics" className="statistics">
                        <div>Neutral { this.props.state.neutral }</div>
                        <div>Bad { this.props.state.bad }</div>
                        <div>Good! { this.props.state.good }</div>
                
                    Total:  {this.countTotalFeedback()}
                    <br />
                    Positive % : {this.countPositiveFeedbackPercentage()}
                    <br />
                    </Section>

                )
        }
        
    }
}

export default Statistics


