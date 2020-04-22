import React from 'react';
import PropTypes from 'prop-types';

import {CalendarEventWrapper, TimeWrapper, Time, DetailsWrapper, Name, Service, Car} from './CalendarEvent.styles';

const CalendarEvent = ({event, onEventPress}) => {
  const {date,eventName, isFinished, car, customerFullName,additionalInfo} = event;
  return (
    <CalendarEventWrapper onPress={onEventPress}>
      <TimeWrapper>
        <Time>{date.date + ' ' + date.time}</Time>
      </TimeWrapper>
      <DetailsWrapper>
        <Name>{customerFullName}</Name>
        <Service>Paslauga: {eventName}</Service>
        <Car>Masina: {car}</Car>
      </DetailsWrapper>
    </CalendarEventWrapper >
  );
};

CalendarEvent.propTypes = {
	event: PropTypes.object.isRequired,
	onEventPress: PropTypes.func.isRequired,
};

export default CalendarEvent; 