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
  onLeaveFeedback =( name) => {
    this.setState((prevState) => {
     return {[name] : prevState[name] + 1} 
    })
  }
  
  onCountTotalFeedback = () => {
    return (
      this.state.good +
      this.state.neutral +
      this.state.bad
    );
  };
  onCountPositiveFeedbackPercentage = () => {
    const total =
      this.state.good +
      this.state.neutral +
      this.state.bad;
    const precentage = Math.round((this.state.good / total) * 100);
    return `${precentage} %`;
  };

  render() {
    return (
      <>
        <FeedbackOptions
          onLeaveFeedback={this.onLeaveFeedback}
          options={Object.keys(this.state)}
        />
        {this.state.good +
          this.state.neutral +
          this.state.bad >
        0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.onCountTotalFeedback()}
            positivePercentage={this.onCountPositiveFeedbackPercentage()}
          />
        ) : (
          <Title titleText="There is no feedback" />
        )}
      </>
    );
  }
}
