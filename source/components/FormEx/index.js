import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import style from './style';
const Form = () => {
  const defaultValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmpassword: '',
  };
  const [values, setValues] = useState(defaultValues);
  const handleChange = (field, value) => {
    setValues({...values, [field]: value});
  };
  // console.log('===>>>values', values);

  const handleSubmit = () => {
    console.log('Values===>>', values);
    setValues(defaultValues);
  };
  return (
    <View style={style.main}>
      <Text style={style.textStyle}>Registration Form</Text>
      <TextInput
        style={style.input}
        value={values.first_name}
        keyboardType="text"
        placeholder="Enter your first name"
        placeholderTextColor="grey"
        onChangeText={e => {
          handleChange('first_name', e);
        }}
      />
      <TextInput
        style={style.input}
        value={values.last_name}
        keyboardType="text"
        placeholder="Enter your last name"
        placeholderTextColor="grey"
        onChangeText={e => {
          handleChange('last_name', e);
        }}
      />
      <TextInput
        style={style.input}
        value={values.email}
        keyboardType="text"
        placeholder="Enter your Email"
        placeholderTextColor="grey"
        onChangeText={e => {
          handleChange('email', e);
        }}
      />
      <TextInput
        style={style.input}
        value={values.password}
        keyboardType="password"
        placeholder="Enter your password"
        placeholderTextColor="grey"
        onChangeText={e => {
          handleChange('password', e);
        }}
      />
      <TextInput
        style={style.input}
        keyboardType="password"
        value={values.confirmpassword}
        placeholder="Enter your confirmpassword"
        placeholderTextColor="grey"
        onChangeText={e => {
          handleChange('confirmpassword', e);
        }}
      />
      <Button title="Submit" onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};
export default Form;
