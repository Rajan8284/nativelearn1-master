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
  }
  async postPasswordDetail(data, token) {
    let post = {
      new_password: data.new_password,
      confirm_password: data.confirm_password,
    };
    let response = await ContactService.postRecover(post, token);
    return response;
  }

  async postforgotDetail(data) {
    let response = await ContactService.postForgot(data);
    return response;
  }
  async postOtpDetail(data, token) {
    let response = await ContactService.postVerifyOtp(data, token);
    return response;
  }
  async postTokenDetail(token) {
    let response = await ContactService.postResend(token);
    return response;
  }

  async postMediaDetail(data) {
    console.log('REPONSE At Contact controller===>>>>>>', data);
    let post = {
      file: 'data:image/png;base64,' + data.assets[0].base64,
      folder_name: 'chat',
      type: 'image',
    };
    let response = await ContactService.postMedia(post);
    return response;
  }
}
export default ContactController;
