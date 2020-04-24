import React,{useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import LottieView from "lottie-react-native";

import {ResponseWrapper} from './ResponseAnimation.styles';

const ResponseAnimation = ({isSuccess, isError, onFinishEvent}) => {
  const animationRef = useRef(null);

  useEffect(()=>{
    if(animationRef.current){
        animationRef.current.play();
    }
  },[])

  return (
    <ResponseWrapper>
      <LottieView
        ref={animationRef}          
        style={{
          width: 200,
          height: 200,
        }}
        loop={false}
        source={isSuccess? require('../../../assets/successAnimation.json') : '../../../assets/failureAnimation.json'}
        onAnimationFinish = {() => onFinishEvent()}
      />
    </ResponseWrapper>
  );
};

ResponseAnimation.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  onFinishEvent: PropTypes.func.isRequired,
};

ResponseAnimation.defaultProps = {
	isSuccess: false,
  isError: false
};

export default ResponseAnimation;
