import React from 'react';
import { Text } from 'react-native';

import { useNavigation,useRoute } from '@react-navigation/native';
import BottomIconsContainer from '../../components/layout/BottomIconsContainer';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/custom/Card';

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {date, fullName,service, car, moreDetails} = route.params.event;
    
  return (
    <ScreenWrapper>
      <Card>
        <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{fullName}</Text>
        <Text style={{ fontSize: 20}}>{date}</Text>
        <Text style={{ fontSize: 20}}>Paslauga: {service}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20}}>Masina: {car}</Text>
        <Text style={{ fontSize: 17}}>Papildoma informacija: {moreDetails}</Text>

      </Card>

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='email-outline'
        leftOnClickHandler={() => navigation.navigate('Home')}
        rightOnClickHandler={() => navigation.navigate('Contact')}
      />
    </ScreenWrapper>
  );
};

export default EventScreen;