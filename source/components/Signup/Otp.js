import {
  View,
  ScrollView,
  Text,
  otp,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Link} from '@react-navigation/native';
import LoginService from '../function.controller/Login.services';
import style from './Style';
const Otp = ({route}) => {
  const {token} = route.params;
  const {handleChange, isError, resendOtp, handleSubmit2} = LoginService();
  return (
    <View style={style.main}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={style.heading}>Enter OTP</Text>
        <Text style={style.headingdis}>OTP has been sent on your email.</Text>
        <View style={style.form}>
          <Text style={style.text}>Enter OTP</Text>
          <TextInput
            style={style.input}
            placeholder="Enter your OTP"
            name="otp"
            keyboardType="number"
            placeholderTextColor="grey"
            value={otp}
            onChangeText={e => handleChange('otp', e)}
          />
          {isError.otp.message ? (
            <Text style={style.showError}>{isError.otp.message}</Text>
          ) : null}
          <Text style={style.headingdis}>Didn't receive OTP?</Text>

          <TouchableOpacity
            onPress={() => {
              resendOtp();
            }}>
            <Text style={style.resendotp}>Resend OTP</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              handleSubmit2(token);
            }}>
            <Text style={style.buttontext}>Verify</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Otp;
