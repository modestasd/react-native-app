import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation,useRoute } from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import BottomIconsContainer from '../../components/layout/BottomIconsContainer';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Card from '../../components/custom/Card';
import Modal from '../../components/custom/Modal';

import {updateService, deleteService} from '../../redux/actions';

const ServiceOverviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const [modalProps, setModalProps] = useState({
    isVisible: false,
    onCloseHandler: ()=>{},
    onSubmitHandler: ()=>{},
    modalTitle: '',
    rightButtonTitle: 'Taip',
    leftButtonTitle: 'Ne'
  });

  const {isVisible, onCloseHandler, onSubmitHandler, modalTitle } = modalProps;
  console.log(modalProps)
  let {id, ...service} = route.params.service;
  let {serviceName, priceRange,timeRange, moreDetails, isServiceEnabled} = service; 

  const deleteHandler = () => {
    dispatch(deleteService(id)); 
    setModalProps({...modalProps,isVisible: false});
  }

  const changeStatusHandler = () => {
    dispatch(updateService(id, {...service, isServiceEnabled: !isServiceEnabled}));
    setModalProps({...modalProps,isVisible: false});
  }

  const onDeletePress = () => {
    console.log('in')
    setModalProps({
      ...modalProps, 
      isVisible: true, 
      onCloseHandler: () => setModalProps({...modalProps,isVisible: false}),
      onSubmitHandler:deleteHandler,  
      title: 'Ar tikrai norite istrinti?' 
    });
  }
  
  const onChangeStatusPress = () => {
    console.log('in')
    setModalProps({
      ...modalProps, 
      isVisible: true, 
      onCloseHandler: () => setModalProps({...modalProps,isVisible: false}),
      onSubmitHandler: changeStatusHandler,  
      title: `Ar tikrai norite ${isServiceEnabled ? 'sutabdyti' : 'aktyvuoti'}?`
    });
  }

  return (
    <ScreenWrapper>
      <Card>
        <View style={{padding: 10}}>
          <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{serviceName}</Text>
          <Text style={{ fontSize: 20}}>Trukme: {timeRange}</Text>
          <Text style={{ fontSize: 20, marginBottom: 20}}>Kaina: {priceRange}</Text>
          <Text style={{ fontSize: 17}}>Papildoma informacija: {moreDetails}</Text>
        </View>
          <Modal {...modalProps}/>
          <View  style={styles.actionsContainer}>
            <TouchableOpacity style={{backgroundColor: '#FCE205', paddingHorizontal: 15, paddingVertical: 10,  borderBottomLeftRadius: 10,}}
              onPress={onChangeStatusPress}
            >
              <Text style={{ fontSize: 20}}>{isServiceEnabled ? 'Sustabdyti' : 'Aktyvuoti'}</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: '#DC143C',  paddingHorizontal: 15, paddingVertical: 10,  borderBottomRightRadius: 10,}}
                onPress={onDeletePress}
            >
              <Text style={{ fontSize: 20, color: 'white'}}>Istrinti</Text>
            </TouchableOpacity>
          </View> 
      </Card>

      <BottomIconsContainer 
        leftIconName='arrow-left' 
        rigthIconName='calendar-edit'
        leftOnClickHandler={() => navigation.goBack()}
        rightOnClickHandler={() => navigation.navigate('Home')}
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
});