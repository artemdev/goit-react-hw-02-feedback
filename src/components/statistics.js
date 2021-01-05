import { Component } from 'react';
import Section from './section.js';
import Notification from './notification.js';

class Statistics extends Component {
  countTotalFeedback = () => {
    let total = 0;
    return (total +=
      this.props.state.good + this.props.state.bad + this.props.state.neutral);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.props.state.good / this.countTotalFeedback()) * 100) || 0
    );
  };

  render() {
    const { neutral, bad, good } = this.props.state;
    const totalFeedbacks = this.countTotalFeedback();

    if (totalFeedbacks === 0) {
      return <Notification message="No feedback given" />;
    } else {
      return (
        <Section title="Statistics" className="statistics">
          <div>Neutral {neutral}</div>
          <div>Bad {bad}</div>
          <div>Good! {good}</div>
          Total: {totalFeedbacks}
          <br />
          Positive % : {this.countPositiveFeedbackPercentage()}
          <br />
        </Section>
      );
    }
  }
}

export default Statistics;
