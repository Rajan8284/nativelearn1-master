import {useState} from 'react';
import Validation from '../helper/Validation';
import {ToastAndroid} from 'react-native';
import ContactController from '../apis/controllers/contact.controller';
const LoginService = () => {
  const [isError, setError] = useState({
    email: {
      rules: ['required', 'email'],
      isValid: true,
      message: '',
    },
    password: {
      rules: ['required', 'password'],
      isValid: true,
      message: '',
    },
  });
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const handleChange = (field, value) => {
    let validation = new Validation(isError);
    let node = validation.validateField(field, value);
    setError({...isError, [field]: node});
    setValues({...values, [field]: value});
  };
  const handleSubmit = () => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(values);
    if (isValid && !isValid.haveError) {
      userLogin();
    } else {
      setError({...isValid.errors});
    }
  };

  const userLogin = async () => {
    const response = await new ContactController().postLoginDetail(values);
    if (response && response.status) {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      setValues({
        email: '',
        password: '',
      });
      console.log('=====>>>>>', response.message);
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      console.log('===Error>>', response.message);
    }
  };
  return {
    isError,
    values,
    handleChange,
    handleSubmit,
    userLogin,
  };
};

export default LoginService;
