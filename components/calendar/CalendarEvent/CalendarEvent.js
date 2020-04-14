import React from 'react';
import {CalendarEventWrapper, TimeWrapper, Time, DetailsWrapper, Name, Service, Car} from './CalendarEvent.styles';

const CalendarEvent = ({event, onEventPress}) => {
  return (
    <CalendarEventWrapper onPress={onEventPress}>
      <TimeWrapper>
        <Time>{event.time}</Time>
      </TimeWrapper>
      <DetailsWrapper>
        <Name>{event.fullName}</Name>
        <Service>Paslauga: {event.service}</Service>
        <Car>Masina: {event.car}</Car>
      </DetailsWrapper>
    </CalendarEventWrapper >
  );
};

export default CalendarEvent; 