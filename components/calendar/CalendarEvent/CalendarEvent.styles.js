import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const CalendarEventWrapper = styled.TouchableOpacity`
    flex-direction: row;
    justifyContent: space-between;
    margin: 10px;
    width: ${Dimensions.get("window").width - 20}px;
    height: 100px;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.2;
    shadow-radius: 8px;
    elevation: 5;
    border-radius: 5px; 
    background-color: white;
`;

export const TimeWrapper = styled.View`
    justify-content: center;
    align-content: center;
    padding-left: 20px;
    width: 35%;
    background-color: #fafafa;
`;

export const Time = styled.Text`
    font-size: 14px;
    font-weight: bold;
`; 


export const DetailsWrapper = styled.View`
    width: 65%;
    padding: 10px;
`;

export const Name = styled.Text`
    font-size: 20px;
    text-align: center;
    margin-bottom: 7px;
`; 

export const Service = styled.Text`
    color: #707070;
`; 

export const Car = styled.Text`
    color: #707070;
`; 