import {combineReducers} from 'redux'
import blogs from './blogs'
import auth from './auth'
const rootReducer = combineReducers({
 auth,
 blogs
});

export default rootReducer;
