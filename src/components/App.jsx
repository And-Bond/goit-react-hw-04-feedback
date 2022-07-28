import React, { Component } from 'react';
import FeedbackOptions from './molecules/FeedbackOptions/FeedbackOptions';
import Statistics from './molecules/Statistics/Statistics';
import Title from './atoms/Title/Title';

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
    return this.state.good + this.state.neutral + this.state.bad;
  };
  onCountPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const precentage = Math.round((this.state.good / total) * 100);
    return `${precentage} %`;
  };

  render() {
    return (
      <>
        <FeedbackOptions
          onGoodClick={this.onGoodClickFun}
          onBadClick={this.onBadClickFun}
          onNeutralClick={this.onNeutralClickFun}
        ></FeedbackOptions>
        {this.state.good + this.state.neutral + this.state.bad > 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.onCountTotalFeedback()}
            positivePercentage={this.onCountPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Title titleText="There is no feedback"></Title>
        )}
      </>
    );
  }
}
