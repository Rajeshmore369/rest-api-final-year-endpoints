import {combineReducers} from 'redux'
import blogs from './blogs'
import auth from './auth'
import contact from './contact';
import messages from './messages';
const rootReducer = combineReducers({
 auth,
 blogs,
 contact,
 messages
});

export default rootReducer;
