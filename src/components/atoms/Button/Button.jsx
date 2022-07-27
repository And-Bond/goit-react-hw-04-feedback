import React from 'react';
import styled from 'styled-components';
import proptypes from 'prop-types';

const Button = ({ btnText, className, onClick }) => {
  return (
    <ButtonStyled onClick={onClick} className={className}>
      {btnText}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  width: 75px;
  height: 25px;
  background-color: gray;
  cursor: pointer;
  border: none;
`;

Button.propTypes = {
  btnText: proptypes.string,
  className: proptypes.string,
  onClick: proptypes.func,
};

export default Button;
