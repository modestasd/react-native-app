import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import {StatisticItemWrapper,Title,BottomText} from './StatisticItems.styles';
import Colors from '../../../helpers/colors';

const StatisticItem = ({iconName,onPressHandler,title, bottomText, backgroundColor}) => {
  return (
    <StatisticItemWrapper backgroundColor={backgroundColor} >
      <Title>{title}</Title>
      <FontAwesome name={iconName} size={35} color="white" />
      <BottomText>{bottomText}</BottomText>
    </StatisticItemWrapper>
  );
};

StatisticItem.propTypes = {
	iconName: PropTypes.string.isRequired,
	onPressHandler: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

StatisticItem.defaultProps = {
	backgroundColor: Colors.main
};
 
export default StatisticItem;
