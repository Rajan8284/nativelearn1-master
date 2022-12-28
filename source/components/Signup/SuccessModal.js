import Modal from 'react-native-modal';
import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import style from './Style';
const SuccessModal = props => {
  const {isModalVisible, setModalVisible} = props;
  console.log('-----MODAL-------', isModalVisible);
  return (
    <Modal isVisible={isModalVisible}>
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
  );
};
export default SuccessModal;
