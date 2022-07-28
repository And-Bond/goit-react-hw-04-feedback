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
  background-color: white;
  cursor: pointer;
  border: black 1px solid;
  margin-left: 2px;
`;

Button.propTypes = {
  btnText: proptypes.string,
  className: proptypes.string,
  onClick: proptypes.func,
};

export default Button;
