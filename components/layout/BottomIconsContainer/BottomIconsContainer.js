 import React from 'react';

import Icon from '../../custom/Icon';
import {BottomIconsWrapper} from './BottomIconsContainer.styles';

const BottomIconsContainer = ({leftIconName, rigthIconName,iconColor,leftOnClickHandler, rightOnClickHandler}) => { 
  return (
      <BottomIconsWrapper>
        <Icon iconName={leftIconName} iconColor={iconColor} onClickHandler={leftOnClickHandler} />
        <Icon iconName={rigthIconName} iconColor={iconColor} onClickHandler={rightOnClickHandler}/>
      </BottomIconsWrapper>
  );
};


export default BottomIconsContainer;
