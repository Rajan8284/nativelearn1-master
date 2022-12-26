import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Text, Button, View} from 'react-native';
import style from './Style';
import LoginService from '../function.controller/Login.services';
const SuccessModal = () => {
  const {modalVisible, toggleModal} = LoginService();
  return (
    <View style={{flex: 1}}>
      <Modal isVisible={modalVisible}>
        <View style={{flex: 1}}>
          <Text style={style.text}>Hello!</Text>
          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};
export default SuccessModal;
