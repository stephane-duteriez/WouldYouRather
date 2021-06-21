import {RECEIVE_QUESTIONS} from '../actions/questions';

/**
* @description reducer for questions
* @param {object} state : current state
* @param {string} action : action
* @return {object} updated state
*/
export default function questions( state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    default:
      return state;
  }
}
