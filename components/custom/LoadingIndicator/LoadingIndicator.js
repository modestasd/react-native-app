import React from 'react';
import {LoadingSpinner} from './LoadingIndicator.styles';
import Colors from '../../../helpers/colors';

// make animation with car icon
const LoadingIndicator = () => { 
    return <LoadingSpinner size="large" color={Colors.mainDark} />
};

export default LoadingIndicator;
