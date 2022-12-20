import {StyleSheet} from 'react-native';
import {COLORS} from '../../globalVariables/colors';

const style = StyleSheet.create({
  main: {
    backgroundColor: COLORS.white,
    height: '100%',
    alignItems: 'center',
    color: COLORS.black,
  },
  textStyle: {
    marginTop: 20,
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: 23,
  },
  input: {
    borderRadius: 15,
    width: '90%',
    borderWidth: 1,
    color: COLORS.black,
    height: 40,
    marginTop: 20,
  },
});
export default style;
