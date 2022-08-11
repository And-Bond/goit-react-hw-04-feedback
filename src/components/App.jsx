import React, { Component } from 'react';
import FeedbackOptions from './molecules/FeedbackOptions/FeedbackOptions';
import Statistics from './molecules/Statistics/Statistics';
import Title from './atoms/Title/Title';

export class App extends Component {
  state = {
    // Додав кожній опції title, щоб знати, що за кнопку ми рендеримо
    options: [
      { good: 0, title: 'Good' },
      { neutral: 0, title: 'Neutral' },
      { bad: 0, title: 'Bad' },
    ],
  };
 
  onLeaveFeedback = name => {
    this.state.options.map(obj => {
      // Перебираю масив об'єктів, щоб дізнитися що за кнопу я натиснув
      const keys = Object.keys(obj);
      // Дістаю ключі
      if (keys[0] === name) {
        // Перевіряю, чи це потрібний ключ, якщо так то виконуємо заміну стейта
        // Я не розумію як змінити стейт відносно того, який ключ ми отримали(good,neutral чи bad),
        //  а саме як нам пробратися у глибину, якщо стейт це options, тобто масив, та ще й об'єктів
        // this.setState(() => {
          // return {}
        // })
      } else {
        return null;
      }
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
          onLeaveFeedback={this.onLeaveFeedback}
          options={this.state.options}
         />
        {this.state.good + this.state.neutral + this.state.bad > 0 ? (
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
