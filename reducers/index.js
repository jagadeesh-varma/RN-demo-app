import { combineReducers } from 'redux';
import userReducer from './details';
const rootReducer = combineReducers({
   user:userReducer,
});
export default rootReducer;