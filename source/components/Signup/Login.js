import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Link} from '@react-navigation/native';
import React, { useState } from 'react';
import LoginService from '../function.controller/Login.services';
import style from './Style';
import { Input,Icon } from '@rneui/themed';
const Login = () => {
  const {
    values,
    handleChange,
    isError,
    handleSubmit,
   } = LoginService();
  const [showpassword,setShowpassword]=useState(true);

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
          <Input
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
          
           <Input
            style={style.input}
            placeholder='Enter your Password'
            secureTextEntry={showpassword}
            onChangeText={e => handleChange('password', e)}
            value={values.password}
            rightIcon={
            <Icon
             name='comment'
            size={24}
            color='black'/>
          }
              /> 

          {/* <TextInput
            style={style.input}
            placeholder="Enter your Password"
            name="password"
            secureTextEntry={showpassword}
            keyboardType="text"
            placeholderTextColor="grey"
            value={values.password}
            onChangeText={e => handleChange('password', e)}
          /> */}
          {values.password.length > 0 ? <TouchableOpacity
            onPress={()=>setShowpassword(!showpassword)}>
            <Text style={style.text}>Show password</Text>
          </TouchableOpacity>:""}
          {isError.password.message ? (
            <Text style={style.showError}>{isError.password.message}</Text>
          ) : null}
          <Link to={{screen: 'Forgotpassword'}} style={style.forgotpassword}>
            Forgot password?
          </Link>
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
