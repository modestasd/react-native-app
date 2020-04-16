import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput, Button,TouchableOpacity } from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const onButtonClick = () => {
    dispatch(login(email, password));
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.titleText}>Sveiki sugrize</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.inputField} 
          placeholder='El. pastas' 
          autoCompleteType='email' 
          onChangeText={text => setEmail(text)} 
        />
        <TextInput 
          style={styles.inputField} 
          autoCompleteType='password'
          secureTextEntry={true} 
          placeholder='Slaptazodis' 
          onChangeText={text => setPassword(text)} 
        />
      </View>
        <TouchableOpacity style={styles.button} onPress={onButtonClick}>
          <Text style={styles.buttonText}>Prisijungti</Text>
        </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({ 
  titleText:{
    fontSize: 25
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center'
  },
  inputField: {
    height: 40,
    backgroundColor: '#ececec',
    borderRadius: 30,
    width: '85%',
    marginVertical: 10,
    paddingHorizontal: 15
  },
  button: {
    backgroundColor: '#2b5fff',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 30
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default LoginScreen;