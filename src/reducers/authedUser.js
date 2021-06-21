import {SET_AUTHED_USER} from '../actions/authedUser';

/**
* @description recuder for authedUser
* @param {object} state : current state
* @param {string} action : action
* @return {object} updated authedUser state
*/
export default function users( state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
