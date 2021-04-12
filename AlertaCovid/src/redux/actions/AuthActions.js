import axios from 'axios';
import {LOGIN, LOGIN_FAILURE} from '../types';
import { loginApi } from "../../utils/constants/api";
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
        `${loginApi}api_user[email]=${email}&api_user[password]=${password}`,
      );
      dispatch(login(res.data));
    } catch (err) {
      dispatch(login_failure());
    }
  };
}
