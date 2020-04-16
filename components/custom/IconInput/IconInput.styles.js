import styled from 'styled-components/native';

export const IconInputWrapper = styled.View`
    width: 100%;
    align-items: center;
    margin-vertical: 5px;
`;

export const IconTextInput = styled.TextInput`
    height: 50px;
    background-color: white;
    border-radius: 30px;
    width: 85%;
    padding-right: 15px;
    margin-vertical: 10px;
    padding-left: 60px;
    position: absolute;
    shadow-color: black;
    shadow-offset: {width: 0, height: 2};
    shadow-opacity: 0.2;
    shadow-radius: 8px;
    elevation: 5;
    color: black;
    font-size: 18px;
`;

export const IconWrapper = styled.View`
    align-self: flex-start;
    left: 24px;
    justify-content: center;
    background-color: #ececec;
    margin-vertical: 10px;
    height: 50px
    width: 55px;
    padding-horizontal: 15px;
    border-bottom-left-radius: 20px;
    border-top-left-radius: 20px;
`;