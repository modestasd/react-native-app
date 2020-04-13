import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../../redux/actions';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(({auth}) => auth.user);


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.nameText}>{user.fullName}</Text>
      <Text>{user.email}</Text>
      <Text>{user.company}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile')}
       >
        <Text>Redaguoti profili</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.button}
      >
         <Text>Pakeisti slaptazodi</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={()=> dispatch(logout())}
      >
        <Text>Atsijungti</Text>
      </TouchableOpacity>

      <TouchableOpacity
         style={styles.button}
      >
        <Text>Trinti paskyra</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: '85%',
    height: '15%',
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
  nameText: {
    fontSize: 20
  },
});