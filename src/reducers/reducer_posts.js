import { FETCH_POST_SUCCESS, FETCH_ONE_POST_SUCCESS } from '../actions/types'

export default function (state = {}, action) {
  
  switch(action.type) {
    case FETCH_POST_SUCCESS:
      return {all: action.payload.data}
    case FETCH_ONE_POST_SUCCESS:
      return { ...state, selectPost: action.payload.data }
    default:
      return state
  }

}
