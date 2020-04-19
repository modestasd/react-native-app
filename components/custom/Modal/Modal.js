import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesome } from '@expo/vector-icons';

import {ModalWrapper, ModalView, ButtonsContainer,ChildrenContainer, CenteredView, Title} from './Modal.styles';
import Button from '../Button';

const Modal = ({isVisible, isTransparent, onCloseHandler, onSubmitHandler, children, title}) => {
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
                    <Button buttonText='Uzdaryti' color='#ff7491' onClickHandler={onCloseHandler} />
                    <Button buttonText='Issaugoti' onClickHandler={onSubmitHandler} />
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
};

Modal.defaultProps = {
    isVisible: false,
    isTransparent: true
}

export default Modal; 
 