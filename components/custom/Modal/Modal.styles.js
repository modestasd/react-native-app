import styled from 'styled-components/native';

export const ModalWrapper = styled.Modal`
`; 

export const CenteredView = styled.View`
    height: 400px;
    justify-content: center;
    align-items: center;
    margin-top: 22px;
`;

export const ModalView = styled.View`
    margin: 20px;
    background-color: white;
    border-radius: 20px;
    padding: 35px;
    align-items: center;
    shadow-color: #000;
    shadow-offset: 0 2px;
    shadow-opacity: 0.25;
    shadow-radius: 3.84px;
    elevation: 5;
`;

export const ChildrenContainer = styled.View`
    height: 250px;
    align-items: center;
    margin-top: 15px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 15px;
`;


export const Title = styled.Text`
    font-size: 19px
    font-weight: bold;
    margin-top: 15px;
`;