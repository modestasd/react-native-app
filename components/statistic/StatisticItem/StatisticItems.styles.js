import styled from 'styled-components/native';

export const StatisticItemWrapper = styled.TouchableOpacity`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "#35baf8"};
    width: 40%;
    height: 120;
    margin-horizontal: 10;
    align-items: center;
    shadow-color: black;
    shadow-offset: {width: 0, height: 1};
    shadow-opacity: 0.2;
    shadow-radius: 5; 
    elevation: 5;
    border-radius: 5;
    padding: 10px;
`;

export const BottomText = styled.Text`
    color: white;
    font-weight: bold;
    margin-top: 5;
`;

export const Title = styled.Text`
    color: white;
    font-size: 13;
    font-weight: bold;
    margin-bottom: 10;
`;
