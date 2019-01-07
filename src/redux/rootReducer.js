import { combineReducers } from 'redux';
import { postReducer } from '../screens/home';

const rootReducer = combineReducers({
    posts: postReducer
});

export default rootReducer;
