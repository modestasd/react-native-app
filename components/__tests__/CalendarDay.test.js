import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components/native'
import { find } from 'styled-components/test-utils'

import CalendarDay from '../calendar/CalendarDay';
import {CalendarDayWrapper,DayName,Day, DayWrapper} from '../calendar/CalendarDay/CalenndarDay.styles';

describe('CalendarDay', () => {
    it('expect to match latest snapshot', () => {
        const wrapped = renderer.create(
            <CalendarDay 
                dayName='Pirm' 
                day={1} 
                onDayClick={()=> console.log('Test')} 
                isActive={true} index={2}
            />
        ).toJSON();
        expect(wrapped).toMatchSnapshot(); 
    });
});