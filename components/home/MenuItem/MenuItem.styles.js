import styled from 'styled-components/native';

export const MenuItemWrapper = styled.TouchableOpacity`
    align-items: center;
    background-color: white;
    border-radius: 10px; 
    width: 85%;
    height: 15%;
    margin-top: 20px;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.2;
    shadow-radius: 8px;
    elevation: 5;
    flex-direction: row;
`;

export const IconWrapper = styled.View`
    width: 45%;
    background-color: #fafafa;
    align-items: center;
    height: 100%;
    justify-content: center;
    border-radius: 10px;
`; 

export const Title = styled.Text`
    font-size: 16px;
    padding-horizontal: 30px;
    font-weight: bold;
`;