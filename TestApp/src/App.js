import React from 'react';
import {Text, SafeAreaView } from 'react-native';

import Comp,{ Comp1,Comp2 } from './components/Multi';
import First from './components/First';

import Styles from './components/estilo';

const App = () => {
  return (
    <SafeAreaView style={Styles.Container}>
      <Comp />
      <First/>
    </SafeAreaView>
  );
};
export default App;
