import { combineReducers } from 'redux';
import  postsReducer from './postsReducer';


 const rootreducer = combineReducers({
    posts:postsReducer
})

export default rootreducer;