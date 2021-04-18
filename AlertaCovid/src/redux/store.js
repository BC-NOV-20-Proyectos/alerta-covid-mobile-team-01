import AyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';
import {persistStore, persistReducer} from 'redux-persist';
const persitConfig = {
  key: 'root',
  storage: AyncStorage,
  whitelist: ['AuthReducer', 'HealthReducer'],
};

const persistedReducer = persistReducer(persitConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export {store, persistor};
