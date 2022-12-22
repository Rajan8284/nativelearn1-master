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
    marginTop: 10,
    fontSize: 15,
  },
});
export default style;
