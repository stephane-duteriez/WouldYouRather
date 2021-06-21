export const SET_AUTHED_USER = 'SET_AUTHED_USER';

/**
* @description action that set the current authed user
* @param {string} id - id of the current authed user
* @return {Onject} action
*/
export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id,
  };
}
