import {StyleSheet} from 'react-native';
import {COLORS} from '../../globalVariables/colors';

const style = StyleSheet.create({
  main: {
    backgroundColor: COLORS.white,
    height: '100%',
    alignItems: 'center',
    color: COLORS.black,
  },
  heading: {
    color: COLORS.black,
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 15,
    textAlign: 'center',
  },
  headingdis: {
    fontSize: 15,
    marginTop: 10,
    color: 'grey',
    textAlign: 'center',
  },
  form: {
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    color: COLORS.black,
    fontSize: 15,
    marginBottom: 9,
  },
  input: {
    color: COLORS.black,
    borderColor: 'grey',
    paddingLeft: 10,
    height: 40,
    width: 330,
    borderWidth: 2,
    borderRadius: 18,
  },
  button: {
    height: 40,
    width: 330,
    marginTop: 25,
    backgroundColor: COLORS.black,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
  buttontext: {
    textAlign: 'center',
    color: COLORS.white,
  },
  showError: {
    marginTop: 7,
    marginBottom: 10,
    color: 'red',
  },
  forgotpassword: {
    color: COLORS.primary,
    marginTop: 20,
    fontSize: 15,
  },
  resendotp: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: 8,
    fontSize: 15,
  },
  mainModal: {
    alignContent: 'center',
    textAlign: 'center',
  },
  modal: {
    flex: 1,
    marginTop: 130,
    marginBottom: 230,
    borderRadius: 15,
    alignContent: 'center',
    textAlign: 'center',
    backgroundColor: COLORS.white,
  },
  modaltext: {
    marginTop: 70,
    color: COLORS.black,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalbutton: {
    alignContent: 'center',
    marginLeft: 16,
    height: 40,
    width: '90%',
    marginTop: 70,
    backgroundColor: COLORS.black,
    padding: 10,
    borderColor: 'black',
    borderRadius: 10,
  },
  //Image Picker
  mainPicker: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 20,
  },

  textStyle: {
    padding: 10,
    color: 'black',
    textAlign: 'center',
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 5,
    marginVertical: 10,
    width: 250,
  },
  imageStyle: {
    borderColor: COLORS.white,
    width: 200,
    height: 200,
    margin: 5,
  },
});
export default style;
