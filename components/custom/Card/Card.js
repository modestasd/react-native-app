import React from 'react';
import PropTypes from 'prop-types';

import {CardWrapper } from './Card.styles';

const Card = ({children}) => {
  return (
    <CardWrapper>
      {children} 
    </CardWrapper>
  );
};

export default Card; 
 
