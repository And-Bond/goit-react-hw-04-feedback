import React, { Component } from 'react';
import proptypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import Title from 'components/atoms/Title/Title';

class FeedbackOptions extends Component {
    
  render() {
    const {onGoodClick, onNeutralClick, onBadClick} = this.props
    return (
      <>
        <Title fontSize="22px" titleText="Please leave feedback"></Title>
        <Button onClick={onGoodClick} btnText="Good"></Button>
        <Button onClick={onNeutralClick}btnText="Neutral"></Button>
        <Button onClick={onBadClick} btnText="Bad"></Button>
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
