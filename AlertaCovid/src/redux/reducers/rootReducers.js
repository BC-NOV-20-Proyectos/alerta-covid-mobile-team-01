import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HealthReducer from './HealthReducer';
import PlaceReducer from './PlaceReducer'
import ResetPasswordReducer from './ResetPasswordReducer'
const rootReducer = combineReducers({
  AuthReducer,
  HealthReducer,
  PlaceReducer,
  ResetPasswordReducer
});

export default rootReducer;
