import React, { Component } from 'react';
import FeedbackOptions from './molecules/FeedbackOptions/FeedbackOptions';
import Statistics from './molecules/Statistics/Statistics';
import Title from './atoms/Title/Title';

export class App extends Component {
  state = {
    // Додав кожній опції title, щоб знати, що за кнопку ми рендеримо(Чи це потрібно?)
    options: [
      { good: 0, title: 'Good' },
      { neutral: 0, title: 'Neutral' },
      { bad: 0, title: 'Bad' },
    ],
    // Чи state правильно виглядає? 
    // бо консоль каже що це тільки об'єкт
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
    return this.state.options[0].good + this.state.options[1].neutral + this.state.options[2].bad;
  };
  onCountPositiveFeedbackPercentage = () => {
    const total = this.state.options[0].good + this.state.options[1].neutral + this.state.options[2].bad;
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
        {this.state.options[0].good + this.state.options[1].neutral + this.state.options[2].bad > 0 ? (
          <Statistics
            good={this.state.options[0].good}
            neutral={this.state.options[1].neutral}
            bad={this.state.options[2].bad}
          
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
