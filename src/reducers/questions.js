import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  ADD_ANSWER,
} from '../actions/questions';

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
    case ADD_QUESTION:
      const {question} = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_ANSWER:
      const {id, authedUser, answer} = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: [
              ...state[id][answer].votes,
              authedUser,
            ],
          },
        },
      };
    default:
      return state;
  }
}
