import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';

import BottomIconsContainer from '../../components/layout/BottomIconsContainer';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/custom/Card';

const ServiceOverviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {serviceName, priceRange,timeRange, moreDetails, isServiceEnabled} = route.params.service;

  return (
    <ScreenWrapper>
      <Card>
        <View style={{padding: 10}}>
          <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{serviceName}</Text>
          <Text style={{ fontSize: 20}}>Trukme: {timeRange}</Text>
          <Text style={{ fontSize: 20, marginBottom: 20}}>Kaina: {priceRange}</Text>
          <Text style={{ fontSize: 17}}>Papildoma informacija: {moreDetails}</Text>
        </View>
          <View  style={styles.actionsContainer}>
            <TouchableOpacity style={{backgroundColor: '#FCE205', paddingHorizontal: 15, paddingVertical: 10,  borderBottomLeftRadius: 10,}}>
              <Text style={{ fontSize: 20}}>{isServiceEnabled ? 'Sustabdyti' : 'Aktyvuoti'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#DC143C',  paddingHorizontal: 15, paddingVertical: 10,  borderBottomRightRadius: 10,}}>
              <Text style={{ fontSize: 20, color: 'white'}}>Istrinti</Text>
            </TouchableOpacity>
          </View> 
      </Card>

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='calendar-edit'
        leftOnClickHandler={() => navigation.goBack()}
        rightOnClickHandler={() => navigation.navigate('CreateService')}
      />

    </ScreenWrapper>
  );
};

export default ServiceOverviewScreen;


const styles = StyleSheet.create({
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1
  }
})