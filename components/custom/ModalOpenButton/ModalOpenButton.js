import React from 'react';
import PropTypes from 'prop-types';
import {ModalButtonWrapper, Title} from './ModalOpenButton.styles';

const ModalOpenButton = ({title,onPressHandler}) => {
  return (
      <ModalButtonWrapper onPress={()=> onPressHandler()}>
        <Title>{title}</Title>
      </ModalButtonWrapper>
  );
};

ModalOpenButton.propTypes = {
	title: PropTypes.string.isRequired,
  onPressHandler: PropTypes.func.isRequired
};

ModalOpenButton.defaultProps = {
	title: 'Pasirinkti',
}

export default ModalOpenButton; 
