
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../../helpers/colors';
import {ServiceMenuItemWrapper, Title,RightDetailsWrapper, Price, Time} from './ServiceMenuItem.styles';

const ServiceMenuItem = ({onPressHandler, title, price, time}) => {
  return (
    <ServiceMenuItemWrapper onPress={onPressHandler}>
      <Title>{title}</Title>
      <RightDetailsWrapper>
        <Price>{price}</Price>
        <Time>{time}</Time>
      </RightDetailsWrapper>
    </ServiceMenuItemWrapper>
  );
};

ServiceMenuItem.propTypes = {
	onPressHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default ServiceMenuItem;