import {getInialData} from '../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import {showLoading, hideLoading} from 'react-redux-loading';

/**
* @description handle that fetch the initial data
* @return {function} handle
*/
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInialData()
        .then(({users, questions}) => {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(hideLoading());
        });
  };
}
