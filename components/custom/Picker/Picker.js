import React from 'react';
import PropTypes from 'prop-types';
import {PickerWrapper} from './Picker.styles';
import Modal from '../Modal';
import {Picker as DropDown} from 'react-native';


const Picker = ({modalTitle,modalVisible,onCloseHandler,onSubmitHandler,width,height,pickerDataList,pickerValue,setPickerValue}) => {
  return (
    <Modal
      isVisible={modalVisible} 
      onCloseHandler={onCloseHandler}
      onSubmitHandler={onSubmitHandler}
      title={modalTitle}
    >
      <PickerWrapper 
        width={width}
        height={height}
        selectedValue={pickerValue || pickerDataList[0]} 
        onValueChange={(itemValue, itemIndex) => setPickerValue(itemValue)}
      >
        {pickerDataList.map((item, index) => (
          <DropDown.Item label={item} key={index} value={item} />
        ))}
      </PickerWrapper>
    </Modal>
  );
};

Picker.propTypes = {
    modalTitle: PropTypes.string.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
    pickerDataList: PropTypes.array.isRequired,
    setPickerValue: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    pickerValue: PropTypes.string,
};

Picker.defaultProps = {
    modalTitle: 'Pasirinkti',
    modalVisible: false,
    width: 200,
    height: 300,
}

export default Picker; 