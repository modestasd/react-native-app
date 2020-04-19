import styled from 'styled-components/native';

export const StatisticItemWrapper = styled.TouchableOpacity`
    background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "#35baf8"};
    width: 40%;
    height: 120px;
    margin-horizontal: 10px;
    align-items: center;
    shadow-color: black;
    shadow-offset: 0 1px;
    shadow-opacity: 0.2;
    shadow-radius: 5px; 
    elevation: 5;
    border-radius: 5px;
    padding: 10px;
`;

export const BottomText = styled.Text`
    color: white;
    font-weight: bold;
    margin-top: 5px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
`;