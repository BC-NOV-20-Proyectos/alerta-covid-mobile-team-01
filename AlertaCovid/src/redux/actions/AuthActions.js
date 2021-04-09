import axios from 'axios';
import {LOGIN, LOGIN_FAILURE} from '../types';

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

export function loginFetch(email, password) {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `https://hidden-cliffs-21927.herokuapp.com/api/user/sign_in?api_user[email]=${email}&api_user[password]=${password}`,
      );
      dispatch(login(res.data));
    } catch (err) {
      dispatch(login_failure());
    }
  };
}
