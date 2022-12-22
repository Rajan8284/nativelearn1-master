import {Text, View} from 'react-native';
import React, {Component} from 'react';
import InputExample from './source/components/InputEx';
import Form from './source/components/FormEx';
import Login from './source/components/Signup/Login';
import Forgotpassword from './source/components/Signup/Forgotpassword';
const App = () => {
  return (
    <View>
      <Login />
      {/* <Forgotpassword /> */}
    </View>
  );
};

export default App;
