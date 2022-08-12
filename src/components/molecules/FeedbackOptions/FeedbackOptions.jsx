import React, { Component } from 'react';
import proptypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import Title from 'components/atoms/Title/Title';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <Title fontSize="22px" titleText="Please leave feedback" />
      {options?.map((option) => {
          return <Button key={option} onClick={() => onLeaveFeedback(option)} btnText={option} />
        })}
    </>
  );
};

FeedbackOptions.propTypes = {
  onGoodClick: proptypes.func,
  onNeutralClick: proptypes.func,
  onBadClick: proptypes.func,
};

export default FeedbackOptions;
