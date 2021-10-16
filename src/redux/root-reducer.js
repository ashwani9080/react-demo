import {combineReducers} from 'redux';

import counterSlice from './slices/counterSlice';
import userSilce from './slices/userSlice';

export default combineReducers({
  counterSlice,
  userSilce,
});
