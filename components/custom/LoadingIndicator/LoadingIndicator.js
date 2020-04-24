import React,{useEffect} from 'react';
import {Animated,Easing} from 'react-native';

// make animation with car icon
const LoadingIndicator = () => { 
  let spinValue = new Animated.Value(0);

    useEffect(()=>{
        spin();
    }); 

    const spin =()=> {
    spinValue.setValue(0)
    Animated.timing(
        spinValue,
        {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true
        }
    ).start(() => spin())}

    const spiner = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
    });

    return (
        <Animated.Image 
            source={require('../../../assets/tire.png')} 
            style={{ width: 85, height: 85,transform: [{rotate: spiner}]}} 
        />  
    )

};

export default LoadingIndicator;