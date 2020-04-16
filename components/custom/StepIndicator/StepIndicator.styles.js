import styled from 'styled-components/native';
import Colors from '../../../helpers/colors';

export const StepIndicatorWrapper = styled.View`
    width: 75%;
    height: 8px;
    background-color: #ececec;
    margin-vertical: 10px;
`;

export const CurrentStepIndicator = styled.View`
    width: ${({width}) => width}%; 
    height: 8px;
    background-color: ${Colors.mainDark};
`; 

 