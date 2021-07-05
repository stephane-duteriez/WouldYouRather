import {getInialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import {receiveAvatars} from './avatars';
import {showLoading, hideLoading} from 'react-redux-loading';

/**
* @description handle that fetch the initial data
* @return {function} handle
*/
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInialData()
        .then(({users, questions, avatars}) => {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(receiveAvatars(avatars));
          dispatch(hideLoading());
        });
  };
}
