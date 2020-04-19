import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
    background-color: ${({color}) => color };
    padding-vertical: 10px;
    padding-horizontal: 30px;
    border-radius: 30px;
    margin-bottom: 10px;
    margin-horizontal: 5px;
`;

export const Text = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;
