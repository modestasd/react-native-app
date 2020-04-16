import styled from 'styled-components/native';

export const CalendarDayWrapper = styled.TouchableOpacity`
    width: 60px;
    align-items: center;
    flex: 1;
`;

export const DayName = styled.Text`
    font-size: 16px;
    color: grey;
    margin-bottom: 5px;
    height: 20px;
`;

export const DayWrapper = styled.View`
    height: ${({isActive}) => isActive ? "35px" : "40px"};
    width: ${({isActive}) => isActive ? "60%" : "100%"};
    padding: 5px;
    background-color: ${({isActive}) => isActive ? "#4169e1" : 'white'}; 
    border-radius: ${({isActive}) => isActive ? "50px" : "0"}; 
`; 

export const Day = styled.Text`
    font-size: 18px;
    font-weight: bold;
    height: 40px;
    text-align: center;
    color: ${({isActive}) => isActive ? "white" : "black"}; 
`; 