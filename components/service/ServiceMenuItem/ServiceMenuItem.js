
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../../helpers/colors';
import {ServiceMenuItemWrapper, Title,RightDetailsWrapper, Price, Time,Inactive} from './ServiceMenuItem.styles';

const ServiceMenuItem = ({onPressHandler, title, price, time,isActive}) => {
  return (
    <ServiceMenuItemWrapper onPress={onPressHandler}>
      <Title>{title}</Title>
            <RightDetailsWrapper>
      {
        isActive ? 
          <>
            <Price>{price}</Price>
            <Time>{time}</Time>
          </>
        : <Inactive>Sustabdytas</Inactive>
      }
            </RightDetailsWrapper>
    </ServiceMenuItemWrapper>
  );
};

ServiceMenuItem.propTypes = {
	onPressHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
};

export default ServiceMenuItem;