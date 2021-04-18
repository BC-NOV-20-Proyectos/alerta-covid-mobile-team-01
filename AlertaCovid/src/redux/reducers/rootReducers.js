import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HealthReducer from './HealthReducer';
const rootReducer = combineReducers({
  AuthReducer,
  HealthReducer,
});

export default rootReducer;
