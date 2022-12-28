import React, {Component} from 'react';
import Login from './source/components/Signup/Login';
import Forgotpassword from './source/components/Signup/Forgotpassword';
import Otp from './source/components/Signup/Otp';
import Newpassword from './source/components/Signup/Newpassword';
import ImagePicker from './source/components/Signup/ImagePicker';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ImagePicker" component={ImagePicker} />
        <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Newpassword" component={Newpassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
