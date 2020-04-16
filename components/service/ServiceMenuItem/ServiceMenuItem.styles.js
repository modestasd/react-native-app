import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const ServiceMenuItemWrapper = styled.TouchableOpacity`
    align-items: center;
    width: ${Dimensions.get("window").width - 40}px;
    margin-horizontal: 20px;
    height: 80px;
    justify-content: space-between;
    margin-top: 20px;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.2;
    shadow-radius: 8px;
    elevation: 5;
    border-radius: 10px; 
    background-color: white;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 17px;
    padding-horizontal: 50px;
`;

export const RightDetailsWrapper = styled.View`
    justify-content: center;
    align-items: center;
    background-color: #fafafa;
    height: 100%;
    padding-vertical: 10px;
    border-radius: 10px; 
    padding-horizontal: 20px;
`;

export const Price = styled.Text`

`;

export const Time = styled.Text`

`;

