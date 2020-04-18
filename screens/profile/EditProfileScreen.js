import React,{useState} from 'react';
import { ActivityIndicator, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

import {updateProfile} from '../../redux/actions';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import IconInput from '../../components/custom/IconInput';
import Button from '../../components/custom/Button';
import Colors from '../../helpers/colors';

const EditProfileScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const fullName = route.params.fullName;
  
  const {isUpdating, isError, isUpdated} = useSelector(({user}) => user);
  const [profileImage, setProfileImage] = useState(route.params.image);
  const [name, setName] = useState(fullName ? fullName.split(' ')[0] : '');
  const [lastName, setLastName] = useState(fullName ? fullName.split(' ')[1] : '');


  const onSubmit = () => {
    if(name && lastName){
      dispatch(updateProfile(name.concat(' ', lastName), profileImage));
    }
    //add validation errors
  }

  const openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Prieeiga prie galerijos reikalinga ikelti nuotraukai");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.cancelled === true) {
      return;
    }

    setProfileImage(pickerResult.uri);
  }

  return (
    <ScreenWrapper>
    {
      isUpdating ? 
      <ActivityIndicator size="large" color={Colors.mainDark} />
    :
      <>
        <IconInput placeholder='Vardas' iconName='user' value={name} onChangeHandler={text => setName(text)} />
        <IconInput placeholder='Pavarde' iconName='user' value={lastName} onChangeHandler={text => setLastName(text)} />
        {
          profileImage &&
          <Image
            source={{ uri: profileImage }}
            style={{ width: 200, height: 250, resizeMode: "contain" , marginBottom: 5 }}
          />
        }
        <Button buttonText={profileImage ? 'Pakeisti nuotrauka' : 'Prideti nuotrauka'} color='#00A86B' onClickHandler={openImagePickerAsync} /> 

        <Button buttonText='Issaugoti' onClickHandler={onSubmit} /> 
      </>   
    }

    </ScreenWrapper>
  );
};

export default EditProfileScreen;
