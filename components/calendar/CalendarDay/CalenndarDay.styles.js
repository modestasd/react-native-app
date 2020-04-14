import styled from 'styled-components/native';

export const CalendarDayWrapper = styled.TouchableOpacity`
    width: 60;
    align-items: center;
    flex: 1;
`;

export const DayName = styled.Text`
    font-size: 16;
    color: grey;
    margin-bottom: 5;
    height: 20;
`;

export const DayWrapper = styled.View`
    height: ${({isActive}) => isActive ? "35" : "40"};
    width: ${({isActive}) => isActive ? "60%" : "100%"};
    padding: 5px;
    background-color: ${({isActive}) => isActive ? "#4169e1" : 'white'}; 
    border-radius: ${({isActive}) => isActive ? "50px" : ''}; 
`; 

export const Day = styled.Text`
    font-size: 18;
    font-weight: bold;
    height: 40;
    text-align: center;
    color: ${({isActive}) => isActive ? "white" : "black"}; 
`; 