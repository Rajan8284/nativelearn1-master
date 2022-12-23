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
    otp: {
      rules: ['required'],
      isValid: true,
      message: '',
    },
  });
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [otp, SetOtp] = useState('');
  const [token, setToken] = useState(null);
  const handleChange = (field, value) => {
    let validation = new Validation(isError);
    let node = validation.validateField(field, value);
    setError({...isError, [field]: node});
    setEmail({...email, [field]: value});
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
  const handleSubmit1 = () => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(email);
    if (isValid && !isValid.haveError) {
      Forgotpassword();
    } else {
      setError({...isValid.errors});
    }
  };

  const Forgotpassword = async () => {
    const response = await new ContactController().postforgotDetail(email);
    if (response && response.status) {
      setToken(response.token);
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
      navigation.navigate('Otp', {name: 'Otp'});
      console.log('Response Token===>>>', response.token);
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };
  const handleSubmit2 = () => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(otp);
    if (isValid && !isValid.haveError) {
      verifyOtp();
    } else {
      setError({...isValid.errors});
    }
  };
  const verifyOtp = async () => {
    const response = await new ContactController().postOtpDetail(email, token);
    if (response && response.status) {
      console.log('Response===>>', response);
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      console.log('error==>>');
    }
  };

  return {
    email,
    otp,
    isError,
    values,
    handleChange,
    handleSubmit,
    handleSubmit1,
    handleSubmit2,
    userLogin,
    Forgotpassword,
  };
};

export default LoginService;
