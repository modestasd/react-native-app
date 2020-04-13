import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

const EditProfileScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
         style={styles.button}
      >
         <Text>Issaugoti</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: '85%',
    height: '15%',
    justifyContent: 'center',
    marginTop: 20,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOffset: { height: 5, width: 5 },
  },
})