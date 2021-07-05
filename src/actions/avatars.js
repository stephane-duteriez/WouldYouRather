export const RECEIVE_AVATARS = 'RECEIVE_AVATARS';


/**
* @description action when all the avatars qre fetch
* @param {Array} avatars - array of all the avatars
* @return {Object} Action
*/
export function receiveAvatars(avatars) {
  return {
    type: RECEIVE_AVATARS,
    avatars,
  };
}
