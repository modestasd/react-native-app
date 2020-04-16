import React from 'react';
import PropTypes from 'prop-types';

import {CalendarDayWrapper,DayName,Day, DayWrapper} from './CalenndarDay.styles';

const CalendarDay = ({dayName, day, onDayClick, isActive,index}) => {
  return ( 
    <CalendarDayWrapper onPress={() => onDayClick(index, day)}>
      <DayName>{dayName}</DayName>
      <DayWrapper isActive={isActive}>
        <Day isActive={isActive}>{day}</Day>
      </DayWrapper>
    </CalendarDayWrapper >
  );
};

CalendarDay.propTypes = {
	dayName: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
	onDayClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
};

CalendarDay.defaultProps = {
	isActive: false
};
 
export default CalendarDay;
