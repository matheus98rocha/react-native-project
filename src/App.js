import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigations/Routes';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
      animated={true}
      barStyle="dark-content"
      backgroundColor="transparent"
      translucent={true}
      />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
