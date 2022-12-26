import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import style from './Style';
import {Link} from '@react-navigation/native';
import LoginService from '../function.controller/Login.services';
const Forgotpassword = () => {
  const {handleChange, isError, handleSubmit1, email} = LoginService();
  console.log(email);
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
            placeholder="Enter your email address"
            name="email"
            keyboardType="text"
            placeholderTextColor="grey"
            value={email}
            onChangeText={e => handleChange('email', e)}
          />
          {isError.email.message ? (
            <Text style={style.showError}>{isError.email.message}</Text>
          ) : null}

          <TouchableOpacity
            style={style.button}
            onPress={() => {
              handleSubmit1();
            }}>
            <Text style={style.buttontext}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Forgotpassword;
