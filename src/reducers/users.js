import {RECEIVE_USERS} from '../actions/users';
import {ADD_QUESTION, ADD_ANSWER} from '../actions/questions';

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
    case ADD_QUESTION:
      const {question} = action;
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: [
            ...state[question.author].questions,
            question.id,
          ],
        },
      };
    case ADD_ANSWER:
      const {id, authedUser, answer} = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [id]: answer,
          },
        },
      };
    default:
      return state;
  }
}
