import React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput, TouchableHighlight, Modal, TouchableOpacity,Picker,Alert } from 'react-native';

const CreateServiceScreen = () => {
  const [serviceName, setServiceName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [language, setLanguage] = useState('java');

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <Text>Sukurti paslauga</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} placeholder='Paslaugos pavadinimas' onChangeText={text => setServiceName(text)} />
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.stepIndicator}><View style={styles.coloredStepIndicator}/></View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Kitas</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  bottomContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  stepIndicator: {
    width: '50%',
    height: 8,
    backgroundColor: '#ececec',
  },
  coloredStepIndicator: {
    width: '25%',
    height: 8,
    backgroundColor: '#2b5fff',
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
      