import axios from 'axios';
import {RECOVERY} from '../types';
import {ResetPasswordApi} from '../../utils/constants/api';

function ResetPassword(email) {
  return {
    type: RECOVERY,
    payload: email,
  };
}

export function recoveryFetch(email) {
  return async (dispatch) => {
    try {
      await axios.post(
        ResetPasswordApi,
        {email: email},
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        },
      );
      dispatch(ResetPassword());
    } catch (err) {
      console.error(err);
    }
  };
}
