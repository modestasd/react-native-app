import React from 'react';
import { View, Text,Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Entypo } from '@expo/vector-icons';

import HomeScreen from '../screens/home/HomeScreen';
import CalendarScreen from '../screens/calendar/CalendarScreen';
import CalendarOptionsScreen from '../screens/calendar/CalendarOptionsScreen';
import ServicesScreen from '../screens/service/ServicesScreen';
import EventScreen from '../screens/event/EventScreen';
import ContactScreen from '../screens/event/ContactScreen';
import CreateServiceScreen from '../screens/service/CreateServiceScreen';
import ServiceOverviewScreen from '../screens/service/ServiceOverviewScreen';
import StatisticScreen from '../screens/statistic/StatisticScreen';

// import CalendarDrawerNavigator from './CalendarDrawerNavigator'

const Stack = createStackNavigator();

const HomeScreenNavigator = () => {
  const navigation = useNavigation();
  const route = useRoute();

  if(route.state && route.state.routes[0].name === 'Home' && route.state.routes.length > 1){
    navigation.setOptions({ tabBarVisible: false});
  } else {
    navigation.setOptions({ tabBarVisible: true});
  }

  return (
      <Stack.Navigator
       screenOptions={{
        cardStyle: { backgroundColor: '#fafafa' },
       }}
      > 
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Event" options={{headerShown: false}} component={EventScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      
        <Stack.Screen name="Calendar" component={CalendarScreen}  
          options={{
            title: <Text style={{marginLeft: 40, fontSize:16, fontWeight: 'bold'}}>{new Date().toLocaleDateString('lt-LT')}</Text>,
            headerRight: () => (
              <Entypo name="menu" style={{marginRight: 10}} size={30} color="black" onPress={() => navigation.navigate('CalendarOptions')} />
            ),
            // headerLeft : () => (
            //   <Button title='Grizti' color='#4682B4' onPress={() => navigation.goBack()}/>
            // ),
          }}
        />
        <Stack.Screen name="CalendarOptions" component={CalendarOptionsScreen} />

        <Stack.Screen name="Services" options={{headerShown: false}} component={ServicesScreen} />
        <Stack.Screen name="CreateService" component={CreateServiceScreen} />
        <Stack.Screen name="ServiceOverview" options={{headerShown: false}} component={ServiceOverviewScreen} />

        <Stack.Screen name="Statistic" component={StatisticScreen} />

      </Stack.Navigator>
  );
}

export default HomeScreenNavigator;