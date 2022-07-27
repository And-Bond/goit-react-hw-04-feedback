import React from 'react';
import styled from 'styled-components';
import proptypes from 'prop-types';

const Title = ({ titleText, className, fontSize }) => {
  return <TitleStyled className={className}>{titleText}</TitleStyled>;
};
const TitleStyled = styled.h2`
  font-size: ${({fontSize}) => {
    return fontSize
  }};   
  color: black;
`;

Title.propTypes = {
  titleText: proptypes.string,
  className: proptypes.string,
};

export default Title;
