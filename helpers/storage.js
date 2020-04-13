// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';

const deviceStorage = {

  async saveKey(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
        console.log('Error: ' + error.message);
    }
  }, 

  async loadKey(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  },

  async deleteKey(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log('Error: ' + error.message);
    }
  },
 
};

export default deviceStorage;
