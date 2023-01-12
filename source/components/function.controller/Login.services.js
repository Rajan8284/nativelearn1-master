import {useState} from 'react';
import Validation from '../helper/Validation';
import {ToastAndroid, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
  const [email, setEmail] = useState({
    email: '',
  });
  const [otp, setOtp] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [path, setPath] = useState(null);
  const [path1, setPath1] = useState(null);
  const navigation = useNavigation();
  const handleChange = (field, value) => {
    let validation = new Validation(isError);
    let node = validation.validateField(field, value);
    setError({...isError, [field]: node});
    setEmail({...email, [field]: value});
    setOtp({...otp, [field]: value});
    setRecover({...recover, [field]: value});
    setValues({...values, [field]: value});
  };

  // User Login start <<======
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
      // setModalVisible(true);
      navigation.navigate('ImagePicker');
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.TOP,
      );
    } else {
      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
    }
  };

  // Forgot Password Start<<====
  const handleSubmit1 = () => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(email);
    if (isValid && !isValid.haveError) {
      forgotPassword();
    } else {
      setError({...isValid.errors});
    }
  };
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
  // Resend OTP Start <<=======
  const resendOtp = async token => {
    const response = await new ContactController().postTokenDetail(token);
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

  // Verify OTP and Email <<=======
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

  //Recover Password <<=======
  const handleSubmit3 = token => {
    let validation = new Validation(isError);
    let isValid = validation.isFormValid(recover);
    if (isValid && !isValid.haveError) {
      if (recover.new_password !== recover.confirm_password) {
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
      setModalVisible(true);
      // navigation.navigate('Login');
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
  const [data, setData] = useState(null);
  // Image Picker functions <<<<=============

  // Choose from gallery
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 400,
      quality: 1,
      durationLimit: 300,
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      // console.log('Response===>> ', response);
      //   console.log('Response URI====>>>', response.assets[0].uri);
      if (response.assets) {
        setData(response);
        setPath(response.assets[0].uri);
      } else if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      } else if (response.errorCode) {
        Alert.alert('something wrong');
      }
    });
  };
  // console.log('=======>>>>>>', data);
  //Choose by camera
  const chooseFile1 = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 400,
      quality: 1,
      durationLimit: 300,
    };
    launchCamera(options, response => {
      if (response.assets) {
        setPath1(response.assets[0].uri);
      } else if (response.didCancel) {
        Alert.alert('User cancelled camera picker');
        return;
      }
    });
  };
  //Upload media Using API <<<=========
  const uploadMedia = async () => {
    let response = await new ContactController().postMediaDetail(data);
    if (response && response.status) {
      console.log(response);
    } else {
      console.log('Erorrr====>>>');
    }
  };

  return {
    email,
    otp,
    isError,
    values,
    recover,
    isModalVisible,
    setModalVisible,
    handleChange,
    handleSubmit,
    handleSubmit1,
    handleSubmit2,
    handleSubmit3,
    resendOtp,
    userLogin,
    forgotPassword,
    path,
    path1,
    chooseFile,
    chooseFile1,
    navigation,
    uploadMedia,
  };
};

export default LoginService;
