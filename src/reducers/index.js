import { combineReducers } from 'redux'
import postsReducer from './reducer_posts'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  posts: postsReducer,
  form: formReducer
})
