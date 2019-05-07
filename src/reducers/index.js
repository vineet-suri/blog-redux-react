import { combineReducers } from 'redux';
import postsReducers from './postsReducer';
import UserReducers from './userReducer';

export default combineReducers({
    posts: postsReducers,
    users: UserReducers 
});