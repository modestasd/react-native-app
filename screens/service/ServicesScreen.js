import React,{useEffect} from 'react';
import { FlatList} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {getServices} from '../../redux/actions';
import BottomIconsContainer from '../../components/layout/BottomIconsContainer';
import ServiceMenuItem from '../../components/service/ServiceMenuItem';
import ScreenWrapper from '../../components/layout/ScreenWrapper';

const ServicesScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const services = useSelector(({services}) => services.services);

  useEffect(()=>{
    dispatch(getServices());
  },[dispatch]);

  return (
    <ScreenWrapper>
 
      <FlatList
            data={services}
            numColumns={1}
            keyExtractor={item => item.createdAt.toString()}
            renderItem={({ item }) =>
            //create service details component
            <ServiceMenuItem
              onPressHandler={() => navigation.navigate('ServiceOverview', {service: item})}
              title={item.serviceName}
              price={item.priceRange}
              time={item.timeRange}
              isActive={item.isServiceEnabled}
            />
            } 
          />

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='plus'
        leftOnClickHandler={() => navigation.navigate('Home')}
        rightOnClickHandler={() => navigation.navigate('CreateService')}
      />
    </ScreenWrapper>
  );
};

export default ServicesScreen;