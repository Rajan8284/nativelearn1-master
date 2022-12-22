import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LoginService from '../function.controller/Login.services';
import style from './Style';
const Login = () => {
  const {values, handleChange, isError, handleSubmit} = LoginService();
  return (
    <View style={style.main}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={style.heading}>Welcome Back</Text>
        <Text style={style.headingdis}>
          You can search course, and apply course and find scholarship for
          abroad studies.
        </Text>
        <View style={style.form}>
          <Text style={style.text}>Email Address</Text>
          <TextInput
            style={style.input}
            placeholder="Enter your Email"
            name="email"
            keyboardType="text"
            placeholderTextColor="grey"
            value={values.email}
            onChangeText={e => handleChange('email', e)}
          />
          {isError.email.message ? (
            <Text style={style.showError}>{isError.email.message}</Text>
          ) : null}
          <Text style={style.text}>Enter your password</Text>
          <TextInput
            style={style.input}
            placeholder="Enter your Password"
            name="password"
            keyboardType="text"
            placeholderTextColor="grey"
            value={values.phonenumber}
            onChangeText={e => handleChange('password', e)}
          />
          {isError.password.message ? (
            <Text style={style.showError}>{isError.password.message}</Text>
          ) : null}
          <Text style={style.forgotpassword}>Forgot password?</Text>

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={style.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;
