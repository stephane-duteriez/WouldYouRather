import {RECEIVE_AVATARS} from '../actions/avatars';

/**
* @description reducer for avatars
* @param {object} state : current state
* @param {string} action : action
* @return {object} updated state
*/
export default function avatars( state = [], action) {
  switch (action.type) {
    case RECEIVE_AVATARS:
      return [
        ...state,
        ...action.avatars,
      ];
    default:
      return state;
  }
}
