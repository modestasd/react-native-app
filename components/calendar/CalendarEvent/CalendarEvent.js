import React from 'react';
import PropTypes from 'prop-types';

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

CalendarEvent.propTypes = {
	event: PropTypes.object.isRequired,
	onEventPress: PropTypes.func.isRequired,
};

export default CalendarEvent; 