import Constant from '../constants';
import {mainWrapper} from '../services/main';
const ContactService = {
  postRecover,
  postDetails,
  postemailOtp,
  postLogin,
  postForgot,
  postVerifyOtp,
};
function postDetails(params) {
  return mainWrapper.post(Constant.host + 'auth/prospective-signup', params);
}
function postemailOtp(params, token) {
  let url = Constant.host + 'auth/email-verification/' + token;
  return mainWrapper.get(url, params);
}

function postVerifyOtp(params, token) {
  let url = Constant.host + 'auth/email-verification/' + token;
  return mainWrapper.get(url, params);
}

function postLogin(params) {
  return mainWrapper.post(Constant.host + 'auth/login', params);
}
function postForgot(params) {
  return mainWrapper.post(Constant.host + 'auth/forgot-password', params);
}

function postRecover(params, token) {
  let url = Constant.host + 'auth/recover-password/' + token;
  return mainWrapper.post(url, params);
}

export default ContactService;
