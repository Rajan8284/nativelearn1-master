import React from 'react';
import ContactService from '../services/contact.services';

class ContactController extends React.Component {
  async postFormDetail(data) {
    let post = {
      first_name: data.one.first_name,
      last_name: data.one.last_name,
      middle_name: '',
      email: data.one.email,
      phonenumber: '',
      dob: '',
      address: data.two.location,
      city: '',
      fcm_token: '',
      gender: '',
      degree_id: data.two.education,
      device_id: '',
      education: '',
      profession: data.two.profession,
      profession_title: '',
      country: data.two.country,
      about_us: data.two.about_us,
      device_name: '',
      device_type: '',
      password: data.three.password,
      industry_type_id: [14],
      linkedin_url: '',
      resumption_semster: 'Fall - 2023',
      state: '',
      zipcode: '',
    };
    let response = await ContactService.postDetails(post);
    return response;
  }

  async postemailDetail(data, token) {
    let post = {
      otp: data.four.otp,
    };
    let response = await ContactService.postemailOtp(post, token);
    return response;
  }

  async postLoginDetail(data) {
    let post = {
      email: data.email,
      password: data.password,
    };
    let response = await ContactService.postLogin(post);
    console.log('---', response);
    return response;

    // if (response && response.status) {
    //   return response;
    // } else {
    //   ToastAndroid.showWithGravity(
    //     response.message,
    //     ToastAndroid.SHORT,
    //     ToastAndroid.TOP,
    //   );
    //   return null;
    // }
  }
}
export default ContactController;
