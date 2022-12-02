
import React from 'react';

import {View, Text, SafeAreaView} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src1/navigation/TabNavigation';

export default function App(){
  return(
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  )
}


