import {
  _getUsers,
  _getQuestions,
  _getAvatars,
  _saveQuestion,
  _saveQuestionAnswer,
  _saveChangeAvatar,
} from './_DATA';

/**
* @description get initila data from the database
* @return {Promise} all the users and all the questions
*/
export function getInialData() {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
    _getAvatars(),
  ]).then(([users, questions, avatars]) => ({
    users,
    questions,
    avatars,
  }));
}

/**
* @description save a new question
* @param {Object} question - description of a new question
* @return {function} api call to save a question
*/
export function saveQuestion(question) {
  return _saveQuestion(question);
}

/**
* @description register a answer in the database
* @param {Object} answer - information to register the answer
* @return {function} api call to save the answer
*/
export function saveQuestionAnswer(answer) {
  return _saveQuestionAnswer(answer);
}

/**
* @description change the avatar of a user
* @param {Object} avatars
* @return {function} api call to save the answer
*/
export function saveChangeAvatar({userId, avatarURL}) {
  return _saveChangeAvatar({userId, avatarURL});
}


