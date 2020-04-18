import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import {logout} from '../../redux/actions';
import ScreenWrapper from '../../components/layout/ScreenWrapper';

const ProfileScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useSelector(({auth}) => auth.user);
 console.log(user)

  return (
    <ScreenWrapper>

      <Image
        source={{ uri: user.profileImage }}
        style={{
        height: 250,
        width: 250,
        marginTop: 20,
        alignItems: 'stretch',
        resizeMode: 'cover',
        backgroundColor: 'white',
        borderRadius: 50,

         }}
      />

      <Text style={styles.nameText}>{user.fullName}</Text>
      <Text>{user.email}</Text>
      <Text>{user.company}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('EditProfile', {fullName: user.fullName, image: user.profileImage })}
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

      <TouchableOpacity style={{marginTop: 20,}}>
         <Text style={{color: 'red'}}>Trinti paskyra</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 10,
    width: '85%',
    height: 40,
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
})