import React, { Component, useState, useMemo } from 'react';
import FeedbackOptions from './molecules/FeedbackOptions/FeedbackOptions';
import Statistics from './molecules/Statistics/Statistics';
import Title from './atoms/Title/Title';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedback = name => {
    if (name === 'good') {
      setGood(prevGood => {
        return prevGood + 1;
      });
    }
    if (name === 'bad') {
        setBad(prevBad => {
          return prevBad + 1;
        });
     }
    if (name === 'neutral') {
        setNeutral(prevNeutral => {
          return prevNeutral + 1;
        });
    }
  };
  const onCountTotalFeedback = () => {
    return good + neutral + bad;
  };
  const onCountPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const precentage = Math.round((good / total) * 100);
    return `${precentage} %`;
  };
  return (
    <>
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
        options={[`good`,`neutral`,`bad`]}
      />
      {good + neutral + bad > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={onCountTotalFeedback()}
          positivePercentage={onCountPositiveFeedbackPercentage()}
        />
      ) : (
        <Title titleText="There is no feedback" />
      )}
    </>
  );
};

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   onLeaveFeedback =( name) => {
//     this.setState((prevState) => {
//      return {[name] : prevState[name] + 1}
//     })
//   }

//   onCountTotalFeedback = () => {
//     return (
//       this.state.good +
//       this.state.neutral +
//       this.state.bad
//     );
//   };
//   onCountPositiveFeedbackPercentage = () => {
//     const total =
//       this.state.good +
//       this.state.neutral +
//       this.state.bad;
//     const precentage = Math.round((this.state.good / total) * 100);
//     return `${precentage} %`;
//   };

//   render() {
//     return (
//       <>
//         <FeedbackOptions
//           onLeaveFeedback={this.onLeaveFeedback}
//           options={Object.keys(this.state)}
//         />
//         {this.state.good +
//           this.state.neutral +
//           this.state.bad >
//         0 ? (
//           <Statistics
//             good={this.state.good}
//             neutral={this.state.neutral}
//             bad={this.state.bad}
//             total={this.onCountTotalFeedback()}
//             positivePercentage={this.onCountPositiveFeedbackPercentage()}
//           />
//         ) : (
//           <Title titleText="There is no feedback" />
//         )}
//       </>
//     );
//   }
// }
