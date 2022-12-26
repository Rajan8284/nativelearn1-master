import {useState} from 'react';
import Validation from '../helper/Validation';
import {ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
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
    new_password: {
      rules: ['required', 'password'],
      isValid: true,
      message: '',
    },
    confirm_password: {
      rules: ['required', 'password'],
      isValid: true,
      message: '',
    },
  });
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [recover, setRecover] = useState({
    new_password: '',
    confirm_password: '',
  });
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const handleChange = (field, value) => {
    let validation = new Validation(isError);
    let node = validation.validateField(field, value);
    setError({...isError, [field]: node});
    setEmail({...email, [field]: value});
    setOtp({...otp, [field]: value});
    setRecover({...recover, [field]: value});
    setValues({...values, [field]: value});
  };

  const [isModalVisible, setModalVisible] = useState(true);
  const toggleModal = () => {
    setModalVisible(true);
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
      forgotPassword();
    } else {
      setError({...isValid.errors});
    }
  };

  const navigation = useNavigation();
  const forgotPassword = async () => {
    const response = await new ContactController().postforgotDetail(email);
    if (response && response.status) {
      navigation.navigate('Otp', {token: response.token});
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  const resendOtp = async () => {
    const response = await new ContactController().postforgotDetail(email);
    if (response && response.status) {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };
  const handleSubmit2 = token => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(otp);
    if (isValid && !isValid.haveError) {
      verifyOtp(token);
    } else {
      setError({...isValid.errors});
    }
  };
  console.log(otp);
  const verifyOtp = async token => {
    const response = await new ContactController().postOtpDetail(otp, token);
    if (response && response.status) {
      navigation.navigate('Newpassword', {token: response.user.token});
      console.log('Response=====>>>', response);
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };
  const handleSubmit3 = token => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(recover);
    if (isValid && !isValid.haveError) {
      if (recover.new_password === recover.confirm_password) {
        recoverPassword(token);
      } else {
        console.log('Password match');
      }
    } else {
      setError({...isValid.errors});
    }
  };

  const recoverPassword = async token => {
    const response = await new ContactController().postPasswordDetail(
      recover,
      token,
    );
    if (response && response.status) {
      console.log('Response===>>', response);
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    }
  };

  return {
    email,
    otp,
    isError,
    values,
    recover,
    isModalVisible,
    toggleModal,
    setModalVisible,
    handleChange,
    handleSubmit,
    handleSubmit1,
    handleSubmit2,
    handleSubmit3,
    resendOtp,
    userLogin,
    forgotPassword,
  };
};

export default LoginService;
