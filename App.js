import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
 
import NavigationWrapper from './navigation/NavigationWrapper';

const App = () => {
  
  return (
    <Provider store={store}>
      <NavigationWrapper />
    </Provider>
  );
};

export default App;


