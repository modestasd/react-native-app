import React,{useEffect} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, FlatList, Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {useSelector, useDispatch} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import {getServices} from '../../redux/actions';

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
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('ServiceOverview', {service: item})}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            }
          />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('CreateService')}
        >
          <MaterialCommunityIcons name="plus" size={40} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: Dimensions.get("screen").width - 40 ,
    padding: 10,
    marginHorizontal: 20 ,
    height: 80,
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10, 
    backgroundColor: 'white',
  },
    iconButton: {
    height: 60,
    width: 60, 
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20
  }
});