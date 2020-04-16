import React from 'react';
import PropTypes from 'prop-types';

import {StepIndicatorWrapper, CurrentStepIndicator } from './StepIndicator.styles';

const StepIndicator = ({totalSteps, currentStep}) => {
  return (
      <StepIndicatorWrapper>
        <CurrentStepIndicator width={100 / totalSteps * currentStep}/>
      </StepIndicatorWrapper>
  );
};

StepIndicator.propTypes = {
	totalSteps: PropTypes.number.isRequired,
	currentStep: PropTypes.number.isRequired,
};

export default StepIndicator; 
 
