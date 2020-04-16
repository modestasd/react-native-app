import React from 'react';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {IconWrapper} from './Icon.styles';

const Icon = ({iconName, iconColor, onClickHandler}) => {
  return (
      <IconWrapper onPress={onClickHandler}>
        <MaterialCommunityIcons name={iconName} size={40} color={iconColor} />
      </IconWrapper>
  );
};

Icon.propTypes = {
	iconColor: PropTypes.string.isRequired,
	onClickHandler: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired, 
};

Icon.defaultProps = {
	iconColor: 'black'
}

export default Icon; 
 
