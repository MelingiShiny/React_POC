// Redux/Reducers.js

import { combineReducers } from 'redux';
import bookReducer from './BookReducers';

const rootReducer = combineReducers({
  books: bookReducer
  // Add other reducers here if needed
});

export default rootReducer;
