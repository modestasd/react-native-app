import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../helpers/colors';

const MenuItem = ({iconName,onPressHandler, itemName}) => {
  return (
    <TouchableOpacity
      style={styles.menuItemContainer}
      onPress={onPressHandler}
    >
      <View style={styles.iconContainer}>
        <FontAwesome name={iconName} size={35} color={Colors.main} />
      </View>
      <Text style={styles.itemNameText}>{itemName}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  menuItemContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10, 
    width: '85%',
    height: '15%',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    flexDirection: 'row'
  },
  itemNameText: {
    fontSize: 16,
    paddingHorizontal: 30,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '45%',
    backgroundColor: '#fafafa',
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 10,
  }
});