import {RECOVERY} from '../types';
const initialState = {
  email: '',
};

function ResetPasswordReducer(state = initialState, action) {      
  switch (action.type) {
    case RECOVERY:
      return {
        email: action.payload
      };
    default:
      return state;
  }
}

export default ResetPasswordReducer;
