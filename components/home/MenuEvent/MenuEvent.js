import React from 'react';
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

export default MenuEvent;