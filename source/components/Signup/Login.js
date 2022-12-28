import {
  View,
  Text,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Link} from '@react-navigation/native';
import React from 'react';
import LoginService from '../function.controller/Login.services';
import style from './Style';
import SuccessModal from './SuccessModal';

const Login = () => {
  const {
    values,
    handleChange,
    isError,
    handleSubmit,
    isModalVisible,
    setModalVisible,
    toggleModal,
  } = LoginService();
  // console.log('Login screan===>>>', isModalVisible);
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
            secureTextEntry={true}
            keyboardType="text"
            placeholderTextColor="grey"
            value={values.password}
            onChangeText={e => handleChange('password', e)}
          />
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

      {isModalVisible ? (
        <SuccessModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
        />
      ) : null}
    </View>
  );
};

export default Login;
