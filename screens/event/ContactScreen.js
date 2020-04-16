import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { Linking } from 'expo';

const ContactScreen = () => {

  const handleCompletePress = () => {
    //add send notification to user phone if he has an app or email if not
  }

  const handleCallPress = () => {
    Linking.openURL('tel:+37065466167');
  }

  const handleSMSPress = () => {
    Linking.openURL(`sms:+37065466167`);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleCompletePress}
      >
        <Text>Darbas atliktas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleCompletePress}
      >
        <Text>Perkelti</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleCallPress}
      >
        <Text>Skambinti</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSMSPress}
      >
        <Text>Siusti SMS</Text>
      </TouchableOpacity>

    </View>
  );
};

export default ContactScreen;

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
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

})
