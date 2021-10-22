import {combineReducers} from 'redux';

import counterSlice from './slices/counterSlice';
import persistedSlice from './slices/persistedSlice';

export default combineReducers({
  counterSlice,
  persistedSlice,
});
