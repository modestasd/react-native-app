import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';
import Colors from '../helpers/colors';

const BottomTabNavigator = ({ state, descriptors,navigation }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        
        let iconName;

        if(label === 'Home'){
          iconName = Platform.OS === 'android' ? 'md-home' : 'ios-home';
        } else if( label === 'Profile'){
          iconName = Platform.OS === 'android' ? 'md-person' : 'ios-person';
        }
        
        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, height: 60, justifyContent: "center", alignItems:"center"}}
          >
            <Ionicons name={iconName} size={30} color={isFocused ? Colors.main : '#222' } />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default BottomTabNavigator;