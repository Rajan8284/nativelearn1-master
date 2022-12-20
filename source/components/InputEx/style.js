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
    color: 'red',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  textStyle: {
    marginTop: 20,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 17,
    fontFamily: 'algerian',
  },
  textInput: {
    borderRadius: 15,
    color: COLORS.black,
    borderWidth: 2,
    width: '80%',
  },
  button: {
    marginTop: 10,
    borderRadius: 50,
  },
  button1: {
    display: 'flex',
  },
});
export default style;
