import React,{useState} from 'react';
import { Text, View, StyleSheet, Modal,Picker,Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import StepIndicator from '../../components/custom/StepIndicator';
import IconInput from '../../components/custom/IconInput';
import Button from '../../components/custom/Button';
import ScreenWrapper from '../../components/layout/ScreenWrapper';

import Colors from '../../helpers/colors';

const CreateServiceScreen = () => {
  const [serviceName, setServiceName] = useState('');
  const [currentStep, setCurrentStep] = useState(1)
  // const [modalVisible, setModalVisible] = useState(false);
  // const [language, setLanguage] = useState('java');
  console.log(currentStep);
  return (
    <ScreenWrapper>
      <Text>Sukurti paslauga</Text>
      <StepIndicator totalSteps={5} currentStep={currentStep}/>
      <IconInput placeholder='Paslaugos pavadinimas' iconName='car' onChangeHandler={text => setServiceName(text)} />
      <IconInput placeholder='Kaina' iconName='money' onChangeHandler={text => setServiceName(text)} />

      <View style={styles.bottomContainer}> 
        <Button buttonText='Kitas' onClickHandler={()=>setCurrentStep(currentStep < 5 ? currentStep+1 : currentStep)} />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CreateServiceScreen;


      // <TouchableHighlight
      //   onPress={() => {
      //     setModalVisible(true);
      //   }}>
      //   <Text>Pasirinkti trukme</Text>
      // </TouchableHighlight>
      // <Modal
      //   animationType="slide"
      //   transparent={false}
      //   visible={modalVisible}
      //   onRequestClose={() => {
      //     Alert.alert('Modal has been closed.');
      //   }}>
      //   <View style={{ marginTop: 22 }}>
      //     <View>
      //       <Picker
      //         selectedValue={'java'}
      //         style={{ height: 50, width: 100 }}
      //         onValueChange={(itemValue, itemIndex) => setLanguage(itemValue )}>
      //         <Picker.Item label="Java" value="java" />
      //         <Picker.Item label="JavaScript" value="js" />
      //       </Picker>
      //       <TouchableHighlight
      //         onPress={() => {
      //           setModalVisible(!modalVisible);
      //         }}>
      //         <Text>Uzdaryti</Text>
      //       </TouchableHighlight>
      //     </View>
      //   </View>
      // </Modal>
      