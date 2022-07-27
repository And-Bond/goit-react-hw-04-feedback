import React, { Component } from 'react';
import proptypes from 'prop-types';
import Title from 'components/atoms/Title/Title';

class Statistics extends Component {
  render() {
    const {good, neutral, bad, total} = this.props
    return (
      <>
        <Title fontWeight="600" fontSize="33px" titleText="Statistics"></Title>
        <Title
          fontWeight="300"
          fontSize="22px"
          titleText={`Good : ${good}`}
        ></Title>
        <Title
          fontWeight="300"
          fontSize="22px"
          titleText={`Neutral : ${neutral}`}
        ></Title>
        <Title
          fontWeight="300"
          fontSize="22px"
          titleText={`Bad : ${bad}`}
        ></Title>
        <Title
          fontWeight="300"
          fontSize="22px"
          titleText={`Total : ${total}`}
        ></Title>
      </>
    );
  }
}

export default Statistics;
