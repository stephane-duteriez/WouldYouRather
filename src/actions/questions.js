export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

/**
* @description action when all the question qre fetch
* @param {Array} questions - array of all the questions
* @return {Object} Action
*/
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

/**
* @description action to add a new question
* @param {Object} question - the new question
* @return {Object} Action
*/
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

/**
* @description actionto to add a new answer
* @param {Object} answer - detail of the answer
* @return {Object} Action
*/
export function addAnswer({id, authedUser, answer}) {
  return {
    type: ADD_ANSWER,
    id,
    authedUser,
    answer,
  };
}
