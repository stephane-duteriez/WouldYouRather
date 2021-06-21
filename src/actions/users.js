export const RECEIVE_USERS = 'RECEIVE_USER';

/**
* @description actionto set the nex users in the store
* @param {Array} users : array of all the users
* @return {Obejct} action
*/
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}


