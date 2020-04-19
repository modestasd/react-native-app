import styled from 'styled-components/native';

export const MenuEventWrapper = styled.TouchableOpacity`
    align-items: center;
    width: 85%;
    height: 30%;
    margin-top: 40px;
    shadow-color: black;
    shadow-offset: 0 2px;
    shadow-opacity: 0.2;
    shadow-radius: 8px;
    elevation: 5;
    border-radius: 10px;
    background-color: white;
`;

export const Header = styled.Text`
    font-size: 18px;
    font-weight: bold;
    background-color: #fafafa;
    width: 100%;
    text-align: center;
    padding: 12px;
    height: 50px;
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