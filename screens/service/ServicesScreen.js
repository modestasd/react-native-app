import React,{useEffect} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {getServices} from '../../redux/actions';
import BottomIconsContainer from '../../components/layout/BottomIconsContainer';
import ServiceMenuItem from '../../components/service/ServiceMenuItem';

const ServicesScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const services = useSelector(({services}) => services.services);

  useEffect(()=>{
    dispatch(getServices());
  },[dispatch]);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
 
      <FlatList
            data={services}
            numColumns={1}
            renderItem={({ item }) =>
            //create service details component
            <ServiceMenuItem
              onPressHandler={() => navigation.navigate('ServiceOverview', {service: item})}
              title={item.name}
              price={item.price}
              time={item.duration}
            />
            } 
          />

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='plus'
        leftOnClickHandler={() => navigation.navigate('Home')}
        rightOnClickHandler={() => navigation.navigate('CreateService')}
      />
    </View>
  );
};

export default ServicesScreen;