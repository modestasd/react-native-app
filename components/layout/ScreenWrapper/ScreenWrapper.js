import React from 'react';
import PropTypes from 'prop-types';

import {ScreenContainer} from './ScreenWrapper.styles';
import LoadingIndicator from '../../custom/LoadingIndicator';

// create centered view passed from props
const ScreenWrapper = ({children, isLoading}) => { 
  if(isLoading){
    return(
      <ScreenContainer isLoading>
        <LoadingIndicator /> 
      </ScreenContainer>
    )
  } 
  else {
    return (
        <ScreenContainer>
          {children}
        </ScreenContainer> 
    );
  }
};

ScreenWrapper.propTypes = {
	isLoading: PropTypes.bool,
};

ScreenWrapper.defaultProps = {
	isLoading: false
};

export default ScreenWrapper;
