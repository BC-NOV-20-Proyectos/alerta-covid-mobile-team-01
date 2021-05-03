import {ADD_PLACE, SYMPTOMS_TRUE, TEST_POSITIVE, REPORT} from '../types';
import axios from 'axios';
import {reportApi} from '../../utils/constants/api';
export function symptoms_true() {
  return {
    type: SYMPTOMS_TRUE,
  };
}

export function test_positive() {
  return {
    type: TEST_POSITIVE,
  };
}

function report() {
  return {
    type: REPORT,
  };
}
export function reportFetch(token, info) {
  return async (dispatch) => {
    try {
      await axios.post(reportApi, info, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      dispatch(report());
    } catch (err) {
      console.error(err);
    }
  };
}
