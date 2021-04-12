import {LOGIN, LOGIN_FAILURE, LOGOUT, LOGOUT_FAILURE} from '../types';
const initalState = {
  user: null,
};

function AuthReducer(state = initalState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return initalState;
    case LOGOUT:
      return {
        user: null,
      };
    case LOGOUT_FAILURE:
      return state;
    default:
      return state;
  }
}

export default AuthReducer;
