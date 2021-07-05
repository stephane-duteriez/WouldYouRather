import {saveChangeAvatar} from '../utils/api';
export const RECEIVE_USERS = 'RECEIVE_USER';
export const CHANGE_AVATAR = 'CHANGE_AVATAR';

/**
* @description action to add all users in the store
* @param {Array} users : array of all the users
* @return {Obejct} action
*/
export function receiveUsers(users={}) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

/**
* @description action to change the avatar of the user
* @param {string} userId
* @param {string} avatarURL
* @return {Obejct} action
*/
export function changeAvatar(userId, avatarURL) {
  return {
    type: CHANGE_AVATAR,
    userId,
    avatarURL,
  };
}

/**
 * @description handle for changing the avatar
 * @param {string} avatarURL
 * @return {func}
 */
export function handleChangeAvatar(avatarURL) {
  return (dispatch, getState) => {
    const {authedUser} = getState();
    return saveChangeAvatar({
      avatarURL: avatarURL,
      userId: authedUser,
    })
        .then(() => dispatch(changeAvatar(authedUser, avatarURL)));
  };
};
