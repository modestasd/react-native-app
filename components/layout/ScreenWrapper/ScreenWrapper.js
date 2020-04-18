 import React from 'react';

import {ScreenContainer} from './ScreenWrapper.styles';

const ScreenWrapper = ({children}) => { 
  return (
      <ScreenContainer>
        {children}
      </ScreenContainer>
  );
};

export default ScreenWrapper;
