import React from 'react';
import PropTypes from 'prop-types';

import {ButtonWrapper, Text } from './Button.styles';
import Colors from '../../../helpers/colors';

const Button = ({buttonText, color, onClickHandler}) => {
  return (
      <ButtonWrapper color={color} onPress={onClickHandler}>
        <Text>{buttonText}</Text>
      </ButtonWrapper>
  );
};

Button.propTypes = {
	buttonText: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
	color: Colors.mainDark
}

export default Button; 
 
