import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> f777f70db10bc4f484ea0ec85039631414761b68
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

<<<<<<< HEAD
MenuItem.propTypes = {
	iconName: PropTypes.string.isRequired,
	onPressHandler: PropTypes.func.isRequired,
  itemName: PropTypes.string.isRequired,
};

=======
>>>>>>> f777f70db10bc4f484ea0ec85039631414761b68
export default MenuItem;