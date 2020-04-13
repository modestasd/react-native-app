import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation,useRoute } from '@react-navigation/native';

const EventScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {date, fullName,service, car, moreDetails} = route.params.event;
    
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View style={styles.mainView}>
        <Text style={{ fontSize: 30, textAlign: "center" , marginBottom: 50}}>{fullName}</Text>
        <Text style={{ fontSize: 20}}>{date}</Text>
        <Text style={{ fontSize: 20}}>Paslauga: {service}</Text>
        <Text style={{ fontSize: 20, marginBottom: 20}}>Masina: {car}</Text>
        <Text style={{ fontSize: 17}}>Papildoma informacija: {moreDetails}</Text>

      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Home')}
        >
          <MaterialCommunityIcons name="arrow-left" size={40} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Contact')}
        >
          <MaterialCommunityIcons name="email-outline" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  mainView: {
    padding: 10,
    width: '85%',
    height: '80%',
    marginVertical: 20,
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
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: 'white',

  },
  buttonsContainer: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 5
  }

});