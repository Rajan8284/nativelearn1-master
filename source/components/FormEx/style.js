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
  submitbutton: {
    height: 40,
    width: '90%',
    marginTop: 20,
  },
  button: {
    height: 40,
    width: '90%',
    marginTop: 20,
    backgroundColor: 'grey',
    padding: 10,
    borderColor: 'black',
  },

  buttontext: {
    color: COLORS.white,
    fontSize: 17,
    textAlign: 'center',
  },
  container: {
    paddingTop: 10,
  },
  image: {
    margin: 20,
    width: 330,
    height: 250,
    resizeMode: 'stretch',
  },
  text: {
    alignItems: 'center',
    padding: 15,
    color: COLORS.black,
    fontSize: 15,
  },
  bgtext: {
    textAlign: 'center',
    padding: 15,
    color: COLORS.white,
    textShadowOffset: {width: -1, height: 0},
    fontSize: 35,
    textShadowRadius: 10,
    textShadowColor: 'black',
  },
  backgroundImage: {
    width: 350,
    height: 500,
    justifyContent: 'center',
    fontWeight: 'bold',
  },
});
export default style;
