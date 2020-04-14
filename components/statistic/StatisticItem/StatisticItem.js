import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {StatisticItemWrapper,Title,BottomText} from './StatisticItems.styles';

const StatisticItem = ({iconName,onPressHandler,title, bottomText, backgroundColor}) => {
  return (
    <StatisticItemWrapper backgroundColor={backgroundColor} >
      <Title>{title}</Title>
      <FontAwesome name={iconName} size={35} color="white" />
      <BottomText>{bottomText}</BottomText>
    </StatisticItemWrapper>
  );
};
 
export default StatisticItem;
