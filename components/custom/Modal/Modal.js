import React from 'react';
import PropTypes from 'prop-types';

import {ModalWrapper, ModalView, ButtonsContainer,ChildrenContainer, CenteredView, Title} from './Modal.styles';
import Button from '../Button';

const Modal = ({isVisible, isTransparent, onCloseHandler, onSubmitHandler, children, title, leftButtonTitle, rightButtonTitle}) => {
  
    return (
        <ModalWrapper
            animationType="slide"
            transparent={isTransparent}
            visible={isVisible}
        >
            <CenteredView>
            <ModalView>
                <ChildrenContainer>
                <Title>{title}</Title>
                {children}
                </ChildrenContainer>  
                <ButtonsContainer> 
                <Button buttonText={leftButtonTitle} color='#ff7491' onClickHandler={onCloseHandler} />
                <Button buttonText={rightButtonTitle} onClickHandler={onSubmitHandler} />
                </ButtonsContainer>
            </ModalView>
            </CenteredView>
        </ModalWrapper>
    );
};

Modal.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    onCloseHandler: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
    isTransparent: PropTypes.bool,
    title: PropTypes.string,
    leftButtonTitle: PropTypes.string,
    rightButtonTitle: PropTypes.string
};

Modal.defaultProps = {
    isVisible: false,
    isTransparent: true,
    leftButtonTitle: 'Uzdaryti',
    rightButtonTitle: 'Issaugoti'
}

export default Modal; 
 
