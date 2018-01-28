import axios from 'axios'
import { FETCH_POST_SUCCESS, FETCH_ONE_POST_SUCCESS } from './types'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=0922camesine'

function fetchPostSuccess(posts) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }
}

function fetchOnePostSuccess(post) {
  return {
    type: FETCH_ONE_POST_SUCCESS,
    payload: post
  }
}

function fetchDeletePostSuccess(id) {
  return {
    type: FETCH_ONE_POST_SUCCESS,
    payload: id
  }
}

export function fetchDeletePost(id) {
  return axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(response => fetchDeletePostSuccess(id))
}

export function fetchOnePost(id) {
  return axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
  .then(posts => fetchOnePostSuccess(posts))
}

export function fetchPost() {
  return axios.get(`${ROOT_URL}/posts${API_KEY}`)
  .then(posts => fetchPostSuccess(posts))
}

export function fetchCreatePost(post) {
  return axios.post(`${ROOT_URL}/posts${API_KEY}`, post)
}
