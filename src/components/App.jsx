import React, { Component } from 'react';
import FeedbackOptions from './molecules/FeedbackOptions/FeedbackOptions';
import Statistics from './molecules/Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onGoodClickFun = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  onBadClickFun = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };
  onNeutralClickFun = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  onCountTotalFeedback = () => {
    let total = this.state.good + 1
    console.log(total);
  };
  render() {
    let total = 0
    return (
      <>
        <FeedbackOptions
          onGoodClick={this.onGoodClickFun}
          onBadClick={this.onBadClickFun}
          onNeutralClick={this.onNeutralClickFun}
        ></FeedbackOptions>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total="underfind"
        ></Statistics>
      </>
    );
  }
}
