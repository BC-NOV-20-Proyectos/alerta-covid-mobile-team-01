import {LOGIN, LOGIN_FAILURE} from '../types';
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
    default:
      return state;
  }
}

export default AuthReducer;
