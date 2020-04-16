import React from 'react';
import PropTypes from 'prop-types';

import {MenuEventWrapper, Header, Details, Time} from './MenuEvent.styles';

const MenuEvent = ({nearestEvent,onPressEvent}) => { 
  return (
      <MenuEventWrapper onPress={onPressEvent}>
        <Header>Artimiausi ivykiai</Header>
        <Details> {nearestEvent && nearestEvent.fullName}</Details>
        <Details> {nearestEvent &&  nearestEvent.service}</Details>
        <Time> {nearestEvent && nearestEvent.date && nearestEvent.date.toLocaleString()}</Time>
      </MenuEventWrapper>
  );
};

MenuEvent.propTypes = {
	nearestEvent: PropTypes.object.isRequired,
	onPressEvent: PropTypes.func.isRequired,
};

export default MenuEvent;