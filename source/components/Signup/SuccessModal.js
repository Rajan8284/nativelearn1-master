import Modal from 'react-native-modal';
import {Text, Button,TouchableOpacity, View} from 'react-native';
import React,{useState} from 'react';
import style from './Style';
import LoginService from '../function.controller/Login.services';
const SuccessModal = () => {
  const {isModalVisible,toggleModal,setModalVisible}=LoginService();
  
  return (
    <View style={style.mainModal}>
      <Button title="Show modal" onPress={toggleModal} />
      <Modal isVisible={isModalVisible} >
        <View style={style.modal}>
          <Text style={style.modaltext}>Success!</Text>
          <Text style={style.headingdis}>Your password has been updated. </Text>
          <View style={style.mainModal}>
          <TouchableOpacity
            style={style.modalbutton}
            onPress={() => {
              setModalVisible(false);
            }}>
            <Text style={style.buttontext}>Login</Text>
          </TouchableOpacity>
          </View>
          
        </View>
      </Modal>
    </View>
  );
};
export default SuccessModal;
