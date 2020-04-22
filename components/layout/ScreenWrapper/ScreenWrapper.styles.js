import styled from 'styled-components/native';

export const ScreenContainer = styled.View`
    flex: 1;
    align-items: center; 
    margin-top: 15px;
    justify-content: ${({isLoading}) => isLoading && 'center' || 'flex-start'};
`;
