import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import HealthReducer from './HealthReducer';
import PlaceReducer from './PlaceReducer'
const rootReducer = combineReducers({
  AuthReducer,
  HealthReducer,
  PlaceReducer,
});

export default rootReducer;
