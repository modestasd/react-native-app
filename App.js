import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import {decode, encode} from 'base-64'
import NavigationWrapper from './navigation/NavigationWrapper';

//firebase bug
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }
console.disableYellowBox = true;

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationWrapper />
    </Provider>
  );
};

export default App;


 