import React, { Component } from 'react';
import proptypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import Title from 'components/atoms/Title/Title';

class FeedbackOptions extends Component {
    
  render() {
    const { onLeaveFeedback, options} = this.props
    return (
      <>
        <Title fontSize="22px" titleText="Please leave feedback" />
        {options?.map((option) => {
          return <Button onClick={() =>{
            const keys = Object.keys(option)
            const key = keys[0]
            return onLeaveFeedback(key)}} btnText={option.title} />
        })}
      </>
    );
  }
}

FeedbackOptions.propTypes = {
  onGoodClick: proptypes.func,
  onNeutralClick: proptypes.func,
  onBadClick: proptypes.func
}

export default FeedbackOptions;
