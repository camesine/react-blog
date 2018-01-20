import { combineReducers } from 'redux'
import postsReducer from './reducer_posts'

export default combineReducers({
  posts: postsReducer
})
