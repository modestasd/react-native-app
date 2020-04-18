import React,{useState} from 'react';
import { Text, View,ActivityIndicator } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {login} from '../../redux/actions';
import IconInput from '../../components/custom/IconInput';
import Button from '../../components/custom/Button';
import Colors from '../../helpers/colors';

const LoginScreen = () => {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const {isLoggingIn, isError} = useSelector(({auth}) => auth);

  const onButtonClick = () => {
    dispatch(login(email, password));
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {
        isLoggingIn ?
          <ActivityIndicator size="large" color={Colors.mainDark} />
        :
          <>
            <Text style={{fontSize: 25}}>Sveiki sugrize</Text>
            <IconInput 
              placeholder='El. pastas' 
              autoCompleteType='email' 
              iconName='envelope' 
              onChangeHandler={text => setEmail(text)}  
            />
            <IconInput 
              placeholder='Slaptazodis' 
              autoCompleteType='password' 
              secureTextEntry={true} 
              iconName='lock' 
              onChangeHandler={text => setPassword(text)} 
            /> 
            <Button buttonText='Prisijungti' onClickHandler={onButtonClick} />
          </>
      }
    </View>
  );
};

export default LoginScreen;