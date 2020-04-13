import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons,Feather } from '@expo/vector-icons';
import { useNavigation,useRoute } from '@react-navigation/native';

const ServiceOverviewScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {name, price,duration, moreInfo, isActive} = route.params.service;

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.mainView}>
        <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{name}</Text>
        <Text style={{ fontSize: 20}}>Trukme: {duration}}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20}}>Kaina: {price}</Text>
        <Text style={{ fontSize: 17}}>Papildoma informacija: {moreInfo}</Text>

        <TouchableOpacity>
          <Text style={{ fontSize: 20}}>{isActive ? 'Laikinai sustabdyti' : 'Aktyvuoti'}</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('CreateService')}
        >
          <Feather name="edit" size={40} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ServiceOverviewScreen;


const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    width: '85%',
    height: '80%',
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
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
    marginBottom: 5
  }

})