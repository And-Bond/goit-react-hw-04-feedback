import React from 'react';
import styled from 'styled-components';
import proptypes from 'prop-types';

const Title = ({ titleText, className, fontSize, fontWeight }) => {
  return (
    <TitleStyled
      fontWeight={fontWeight}
      fontSize={fontSize}
      className={className}
    >
      {titleText}
    </TitleStyled>
  );
};

const TitleStyled = styled.h2`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: Arial, Helvetica, sans-serif;
`;

Title.propTypes = {
  titleText: proptypes.string,
  className: proptypes.string,
};

export default Title;
