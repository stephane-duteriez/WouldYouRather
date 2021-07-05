let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '/static/images/Arche002.jpg',
    answers: {
      '8xf0y6ziyjabvozdd253nd': 'optionOne',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
      'am8ehyc8byjqgar0jgpub9': 'optionTwo',
      'loxhs1bqm25b708cmbf3g': 'optionTwo',
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: '/static/images/poisson01.jpg',
    answers: {
      'vthrdm985a262al8qx3do': 'optionOne',
      'xj352vofupe1dqz9emx13r': 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: '/static/images/soleil01.jpg',
    answers: {
      'xj352vofupe1dqz9emx13r': 'optionOne',
      'vthrdm985a262al8qx3do': 'optionTwo',
      '6ni6ok3ym7mf1p33lnez': 'optionOne',
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
};

let questions = {
  '8xf0y6ziyjabvozdd253nd': {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634, // first
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory',
    },
  },
  '6ni6ok3ym7mf1p33lnez': {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190, // 2
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillian',
    },
  },
  'am8ehyc8byjqgar0jgpub9': {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190, // 4
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic',
    },
  },
  'loxhs1bqm25b708cmbf3g': {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190, // 3
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer',
    },
  },
  'vthrdm985a262al8qx3do': {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190, // 5
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500',
    },
  },
  'xj352vofupe1dqz9emx13r': {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190, // last
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift',
    },
  },
};

const avatars= [
  {
    id: '4kjixxdd2u4pahhzol82r',
    image: '/static/images/Arche002.jpg',
  },
  {
    id: 'noq93rsc1zikbo16u2r1f',
    image: '/static/images/bateau01.jpg',
  },
  {
    id: 'rzk9yu7rw3kfa1xxwqvul',
    image: '/static/images/bougie01.jpg',
  },
  {
    id: 'lhg1bvuymbpbhco1swp7j7',
    image: '/static/images/Coeur01.jpg',
  },
  {
    id: 'xdl20dsarbejcor10hzx8f',
    image: '/static/images/Etoile01.jpg',
  },
  {
    id: '4pvtggvc9xgz103m8e5s3c',
    image: '/static/images/flower02.jpg',
  },
  {
    id: 'alc6j11y0lpq8ysah5d4y',
    image: '/static/images/maison02.jpg',
  },
  {
    id: 'rf5nzun99yg62afdpbtq',
    image: '/static/images/oisseau01.jpg',
  },
  {
    id: '8upvlb9sxu2fnk0e5mg3bo',
    image: '/static/images/Pappillion01.jpg',
  },
  {
    id: 'ndafqb1yy9937yyywqik3c',
    image: '/static/images/paysage02.jpg',
  },
  {
    id: '04yf8ic86lmzxmw1dxdzlu',
    image: '/static/images/poisson01.jpg',
  },
  {
    id: '3lt5qmcit4bnbswmn867k8',
    image: '/static/images/sapin01.jpg',
  },
  {
    id: 's3xk2e92qnig0xabm8c6pr',
    image: '/static/images/soleil01.jpg',
  },
  {
    id: '7z568jw6rhl3c6ly758uti',
    image: '/static/images/Voiture01.jpg',
  },
];

/**
* @description Generate unique id
* @return {String} 13 caractere long integer
*/
function generateUID() {
  return (Math.random().toString(36).substring(2, 15) +
   Math.random().toString(36).substring(2, 15));
}

/**
* @description return all the users
* @return {array} array of user
*/
export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000);
  });
}

/**
* @description return all the questions
* @return {array} array of questions
*/
export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000);
  });
}

/**
* @description return all the questions
* @return {array} array of questions
*/
export function _getAvatars() {
  return new Promise((res, rej) => {
    setTimeout(() => res([...avatars]), 1000);
  });
}

/**
* @description Format question for insert in the database
* @param {Object} question - Detail of a question
* @return {Object} representation of a question
*/
function formatQuestion({optionOneText, optionTwoText, author}) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

/**
* @description Add a new question to the database
* @param {object} question - Detail of a question
* @return {object} fromated question
*/
export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

/**
* @description Add an answare to the database
* @param {Object} answer - detail of the answer of a question
* @return {None}
*/
export function _saveQuestionAnswer({authedUser, qid, answer}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}

/**
* @description Change the avatar of the user
* @param {Object} answer - detail of the answer of a question
* @return {None}
*/
export function _saveChangeAvatar({userId, avatarURL}) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [userId]: {
          ...users[userId],
          avatarURL: avatarURL,
        },
      };

      res();
    }, 500);
  });
}
