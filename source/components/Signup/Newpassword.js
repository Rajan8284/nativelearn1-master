import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from './Style';
import LoginService from '../function.controller/Login.services';
import React from 'react';
import SuccessModal from './SuccessModal';
const Newpassword = ({route}) => {
  console.log('=====>>>Route', route);
  const {token} = route.params;
  const {handleChange, isError, recover, handleSubmit3, isModalVisible,setModalVisible} = LoginService();
  return (
    <View style={style.main}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={style.heading}>Update Password</Text>
        <Text style={style.headingdis}>
          You can search course, and apply course and find scholarship for
          abroad studies.
        </Text>
        <View style={style.form}>
          <Text style={style.text}>Enter new password</Text>
          <TextInput
            style={style.input}
            placeholder="Enter new Password"
            name="new_password"
            secureTextEntry={true}
            keyboardType="text"
            placeholderTextColor="grey"
            value={recover.new_password}
            onChangeText={e => handleChange('new_password', e)}
          />
          {isError.new_password.message ? (
            <Text style={style.showError}>{isError.new_password.message}</Text>
          ) : null}

          <Text style={style.text}>Confirm Password</Text>
          <TextInput
            style={style.input}
            placeholder="Enter your Password"
            name=" confirm_password"
            secureTextEntry={true}
            keyboardType="text"
            placeholderTextColor="grey"
            value={recover.confirm_password}
            onChangeText={e => handleChange('confirm_password', e)}
          />
          {isError.confirm_password.message ? (
            <Text style={style.showError}>
              {isError.confirm_password.message}
            </Text>
          ) : null}
          {recover.new_password !== recover.confirm_password ? (
            <Text style={style.showError}>Password do not match</Text>
          ) : null}

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              handleSubmit3(token);
            }}>
            <Text style={style.buttontext}>Update</Text>
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

export default Newpassword;
