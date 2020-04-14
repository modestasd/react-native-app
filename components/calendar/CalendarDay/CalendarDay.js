import React from 'react';
import {CalendarDayWrapper,DayName,Day, DayWrapper} from './CalenndarDay.styles';

const CalendarDay = ({dayName, day, onDayClick,isActive, index,}) => {
  return ( 
    <CalendarDayWrapper onPress={() => onDayClick(index, day)}>
        <DayName>{dayName}</DayName>
        <DayWrapper isActive={isActive}>
          <Day isActive={isActive}>{day}</Day>
        </DayWrapper>
    </CalendarDayWrapper >
  );
};   
 
export default CalendarDay;
