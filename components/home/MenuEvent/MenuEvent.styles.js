import styled from 'styled-components/native';

export const MenuEventWrapper = styled.TouchableOpacity`
    align-tems: center;
    width: 85%;
    height: 30%;
    margin-top: 40px;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.2;
    shadow-radius: 8;
    elevation: 5;
    border-radius: 10;
    background-color: white;
`;

export const Header = styled.Text`
    font-size: 18;
    font-weight: bold;
    background-color: #fafafa;
    width: 100%;
    text-align: center;
    padding: 12px;
    height: 50;
    margin-bottom: 20px;
`; 

export const Details = styled.Text`
    font-size: 16px;
    padding-vertical: 5px;
    text-align: center; 

`; 

export const Time = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin-top: 25px;
    text-align: center; 
`;