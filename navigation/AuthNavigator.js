import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
      <Stack.Navigator
       screenOptions={{
        cardStyle: { backgroundColor: 'white' },
       }}
      >
        <Stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
      </Stack.Navigator>
  );
}

export default AuthNavigator;