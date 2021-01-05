import './App.css';
import Feedback from './components/feedback.js';
import Statistics from './components/statistics.js';
import { Component } from 'react';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const { name } = e.currentTarget;

    //simple validation
    const validFeedbackTypes = Object.keys(this.state).filter(
      key => name === key,
    );
    if (!validFeedbackTypes.length) return;

    this.setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <Feedback
          state={this.state}
          handleFeedback={this.handleFeedback}
          name="name"
        />
        <Statistics state={this.state} />
      </div>
    );
  }
}
