import './App.css';
import Feedback from './components/feedback.js'
import Statistics from './components/statistics.js'
import { Component } from 'react'

export default class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
}

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

  render() {
  
    return (
    <div>
      <Feedback state={this.state} handleFeedback={this.handleFeedback} name="name" />
      <Statistics state={this.state} />
    </div>
  );
} }

