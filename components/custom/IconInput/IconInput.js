import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import {IconInputWrapper, IconTextInput, IconWrapper } from './IconInput.styles';
import Colors from '../../../helpers/colors';

const IconInput = ({placeholder, onChangeHandler, iconName, color}) => {
  return (
      <IconInputWrapper>
        <IconTextInput placeholder={placeholder} onChangeText={text => onChangeHandler(text)} />
          <IconWrapper>
            <FontAwesome name={iconName} size={24} color={color} /> 
          </IconWrapper>
      </IconInputWrapper>
  );
};

IconInput.propTypes = {
	placeholder: PropTypes.string.isRequired,
	onChangeHandler: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string,
};

IconInput.defaultProps = {
	iconName: 'car',
  color:Colors.main
}

export default IconInput; 
 
