import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {useSelector} from 'react-redux';

import HomeScreenNavigator from './HomeScreenNavigator';
import ProfileScreenNavigator from './ProfileScreenNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';

const Tab = createBottomTabNavigator();

const NavigationWrapper = () => {
  const isLoggedIn = useSelector(({auth}) => auth.isLoggedIn);

  return (
      <NavigationContainer>
        {
          isLoggedIn ? 
            <Tab.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
              <Tab.Screen name="Home"  component={HomeScreenNavigator} />
              <Tab.Screen name="Profile" component={ProfileScreenNavigator} />
            </Tab.Navigator>
          :
          <AuthNavigator />
        }
      </NavigationContainer>
  );
};

export default NavigationWrapper;

