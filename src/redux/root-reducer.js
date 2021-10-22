import {combineReducers} from 'redux';

import counterSlice from './slices/counterSlice';
import userSlice from './slices/userSlice';

export default combineReducers({
  counterSlice,
  userSlice,
});
