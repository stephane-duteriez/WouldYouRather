import {RECEIVE_USERS} from '../actions/users';

/**
* @description reducer for users
* @param {object} state : current state
* @param {string} action : action
* @return {object} updated state
*/
export default function users( state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    default:
      return state;
  }
}
