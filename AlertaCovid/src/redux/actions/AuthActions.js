import axios from 'axios';
import {LOGIN, LOGIN_FAILURE, LOGOUT, LOGOUT_FAILURE} from '../types';
import {loginApi, logOutApi} from '../../utils/constants/api';

function login(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

function login_failure() {
  return {
    type: LOGIN_FAILURE,
  };
}

function logout() {
  return {
    type: LOGOUT,
  };
}

function logout_failure() {
  return {
    type: LOGOUT_FAILURE,
  };
}
export function loginFetch(email, password) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${loginApi}api_user[email]=${email}&api_user[password]=${password}`,
      );
      if(res.data.token === null){
        dispatch(login_failure());
        //alert('Email o password incorrectos')
      }else{
        dispatch(login(res.data));
      }
    } 
    catch(err){
      dispatch(login_failure());
    }
  };
}

export function logoutFetch(token) {
  return async (dispatch) => {
    try {
      await axios.delete(logOutApi, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(logout());
    } catch (err) {
      dispatch(logout_failure());
    }
  };
}
