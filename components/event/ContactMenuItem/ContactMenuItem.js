import React from 'react';
import PropTypes from 'prop-types';
import { MaterialIcons } from '@expo/vector-icons';

import {ContactMenuItemWrapper, Title} from './ContactMenuItem.styles';

const ContactMenuItem = ({title,onPressEvent, iconName}) => { 
  return (
      <ContactMenuItemWrapper onPress={onPressEvent}>
        <MaterialIcons iconStyle={{marginRight: 20}} name={iconName} size={28} color='black' /> 
        <Title>{title}</Title>
      </ContactMenuItemWrapper>
  );
};

ContactMenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	onPressEvent: PropTypes.func.isRequired,
	iconName: PropTypes.string.isRequired,
};

export default ContactMenuItem;