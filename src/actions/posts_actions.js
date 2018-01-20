import axios from 'axios'
import { FETCH_POST_SUCCESS } from './types'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=camsine0922'

function fetchPostSuccess(posts) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }
}

export function fetchPost() {
  return axios.get(`${ROOT_URL}/posts${API_KEY}`)
  .then(posts => {
    return fetchPostSuccess(posts)
  })
}
