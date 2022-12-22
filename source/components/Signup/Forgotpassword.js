import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from './Style';
import LoginService from '../function.controller/Login.services';
const Forgotpassword = () => {
  const {values, handleChange, isError, handleSubmit} = LoginService();
  return (
    <View style={style.main}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Text style={style.heading}>Forgot Password?</Text>
        <Text style={style.headingdis}>
          Please enter your email we will send you the OTP to reset your
          password.
        </Text>
        <View style={style.form}>
          <Text style={style.text}>Email Address</Text>
          <TextInput
            style={style.input}
            placeholder="Enter your Email"
            name="email"
            keyboardType="text"
            placeholderTextColor="grey"
            value={values.email}
            onChangeText={e => handleChange('email', e)}
          />
          {isError.email.message ? (
            <Text style={style.showError}>{isError.email.message}</Text>
          ) : null}

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              handleSubmit();
            }}>
            <Text style={style.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Forgotpassword;
