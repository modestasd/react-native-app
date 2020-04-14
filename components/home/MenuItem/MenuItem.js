import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../../../helpers/colors';
import {MenuItemWrapper, IconWrapper, Title} from './MenuItem.styles';

const MenuItem = ({iconName,onPressHandler, itemName}) => {
  return (
    <MenuItemWrapper onPress={onPressHandler}>
      <IconWrapper>
        <FontAwesome name={iconName} size={35} color={Colors.main} />
      </IconWrapper>
      <Title>{itemName}</Title>
    </MenuItemWrapper>
  );
};

export default MenuItem;