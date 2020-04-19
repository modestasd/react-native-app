import React,{useState,useEffect} from 'react';
import { Text, View, StyleSheet,Picker,TouchableOpacity, Switch, ActivityIndicator} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import StepIndicator from '../../components/custom/StepIndicator';
import IconInput from '../../components/custom/IconInput';
import Button from '../../components/custom/Button';
import ScreenWrapper from '../../components/layout/ScreenWrapper';
import Modal from '../../components/custom/Modal';

import Colors from '../../helpers/colors';

import {createService} from '../../redux/actions';


const initialState = {
  serviceName: '',
  moreDetails: '',
  isServiceEnabled: false,
};

const TOTAL_STEPS = 3

const CreateServiceScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  
  const {isCreated,isCreating, isError} = useSelector(({services}) => services);
  const [currentStep, setCurrentStep] = useState(1);

  // move to serviceDetails object
  const [timeFrom, setTimeFrom] = useState(null);
  const [timeTo, setTimeTo] = useState(null);
  const [priceFrom, setPriceFrom] = useState(null);
  const [priceTo, setPriceTo] = useState(null);
  // move to serviceDetails object

  const [serviceDetails, setServiceDetails] = useState(initialState);
  const [timeFromModalVisible, setTimeFromModalVisible] = useState(false);
  const [timeToModalVisible, setTimeToModalVisible] = useState(false);
  const [priceFromModalVisible, setPriceFromModalVisible] = useState(false);
  const [priceToModalVisible, setPriceToModalVisible] = useState(false);

  const {serviceName,moreDetails,isServiceEnabled } = serviceDetails;

  useEffect(()=>{
    if(!isCreated) return;

    navigation.navigate('Home');
  },[isCreated,navigation])

  //to fix picker error and move picker to component, create modal/picker components
  const renderModal = (modalVisible,setModalVisible, pickerDataList, pickerValue, setPickerValue, modalTitle) => {
    return(
      <Modal 
        isVisible={modalVisible} 
        onCloseHandler={()=>setModalVisible(false)}
        onSubmitHandler={()=>setModalVisible(false)}
        title={modalTitle}
      >
        <Picker
          selectedValue={pickerValue || pickerDataList[0]}
          style={{ width: 200, height: 300}}
          onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
        >
          {pickerDataList.map((item, index) => (
            <Picker.Item label={item} key={index} value={item} />
          ))}
        </Picker>
      </Modal>
    );
  };

  ////////Move picker to components in future
  return (
    <ScreenWrapper>
    {
        isCreating ?
          <ActivityIndicator size="large" color={Colors.mainDark} />
        :
        <>
          <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Sukurti paslauga</Text>
          <StepIndicator totalSteps={TOTAL_STEPS} currentStep={currentStep}/>
      {
        currentStep == 1 &&
        <>
          <IconInput 
            placeholder='Paslaugos pavadinimas' 
            value={serviceName} iconName='car' 
            onChangeHandler={text => setServiceDetails({...serviceDetails, serviceName: text})} 
          />

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginRight: 3}}>Trukme nuo: </Text>      
            <TouchableOpacity
              style={{padding: 10, borderColor: 'grey', borderWidth: 1}}
              onPress={()=> setTimeFromModalVisible(true)}
            >
              <Text>{timeFrom || 'Pasirinkti laika'}</Text>
            </TouchableOpacity>
            {timeFromModalVisible && renderModal(timeFromModalVisible,setTimeFromModalVisible,dummyTimeFromList, timeFrom, setTimeFrom, 'Pasirinkite laika')}
            <Text style={{fontSize: 15, fontWeight: 'bold', marginRight: 3, marginLeft: 3}}>iki: </Text>
            <TouchableOpacity
              style={{padding: 10, borderColor: 'grey', borderWidth: 1}}
              onPress={()=> setTimeToModalVisible(true)}
            >
              {timeToModalVisible && renderModal(timeToModalVisible,setTimeToModalVisible,dummyTimeFromList, timeTo, setTimeTo,'Pasirinkite laika')}

              <Text>{timeTo || 'Pasirinkti laika'}</Text>
            </TouchableOpacity>
          </View>
        </>
      }

      {
        currentStep == 2 &&
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', marginRight: 3}}>Kaina nuo: </Text>      
            <TouchableOpacity
              style={{padding: 10, borderColor: 'grey', borderWidth: 1}}
              onPress={()=> setPriceFromModalVisible(true)}
            >
              <Text>{priceFrom || 'Pasirinkti kaina'}</Text>
            </TouchableOpacity>
            {priceFromModalVisible && renderModal(priceFromModalVisible,setPriceFromModalVisible,dummyPriceList, priceFrom, setPriceFrom,'Pasirinkite kaina')}
            <Text style={{fontSize: 15, fontWeight: 'bold', marginRight: 3, marginLeft: 3}}>iki: </Text>
            <TouchableOpacity
              style={{padding: 10, borderColor: 'grey', borderWidth: 1}}
              onPress={()=> setPriceToModalVisible(true)}
            >
              {priceToModalVisible && renderModal(priceToModalVisible,setPriceToModalVisible,dummyPriceList, priceTo, setPriceTo,'Pasirinkite kaina')}
              <Text>{priceTo || 'Pasirinkti kaina'}</Text>
            </TouchableOpacity>
          </View>
      }

      {
        currentStep == 3 &&
        <>
          <IconInput 
            multiline
            numberOfLines={7} 
            value={moreDetails}
            placeholder='Paslaugos aprasymas' 
            iconName='comments' 
            onChangeHandler={text => setServiceDetails({...serviceDetails , moreDetails: text})}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 20}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', marginRight: 10}}>Ijungti paslauga: </Text>
            <Switch
              trackColor={{ false: "#000000", true:  Colors.mainDark }}
              thumbColor={isServiceEnabled ? Colors.main : "#757575"}
              onValueChange={()=> setServiceDetails({...serviceDetails , isServiceEnabled: !isServiceEnabled})}
              value={isServiceEnabled}
            />
          </View>
        </>
      }

      <View style={styles.bottomContainer}> 
        {currentStep > 1 && 
          <Button 
            buttonText='Atgal' 
            onClickHandler={()=>setCurrentStep(currentStep > 1 ? currentStep -1 : currentStep)} 
          />
        }
        <Button 
          buttonText={currentStep == TOTAL_STEPS ? 'Issaugoti' : 'Kitas'} 
          onClickHandler={()=> { currentStep == TOTAL_STEPS ?  dispatch(createService({...serviceDetails, timeRange: timeFrom.concat(' iki ', timeTo), priceRange: priceFrom.concat(' iki ', priceTo)})) : setCurrentStep(currentStep < TOTAL_STEPS ? currentStep+1 : currentStep)}}
        />
      </View>
 </>
    }
    </ScreenWrapper> 
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default CreateServiceScreen;

const dummyTimeFromList = ['1h','1.30h','2h','2.30h','3h','3.30h','4h','4.30h','5h','5.30h','6h','6.30h','7h','7.30h'];
const dummyPriceList = ['5€','10€','20€','30€','50€','75€','100€','125€','150€','200€','250€','300€','500€','1000€'];
      