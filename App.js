import {Text, View} from 'react-native';
import React, {Component} from 'react';
import InputExample from './source/components/InputEx';
import Form from './source/components/FormEx';
import CompList from './source/components/FlatlistEx';
const App = () => {
  return (
    <View>
      {/* <InputExample /> */}
      <Form />
      <CompList />
    </View>
  );
};

export default App;
