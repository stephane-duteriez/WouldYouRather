import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import QuestionCard from './QuestionCard';
import CardDetailHome from './CardDetailHome';
import MyGrid from './MyGrid';

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
export default function ListQuestions({type}) {
  const questions = useSelector(({questions, users, authedUser}) => {
    return Object.keys(questions).map((idQuestion) => ({
      id: idQuestion,
      alreadyAnswered: authedUser?users[authedUser].answers[idQuestion]:false,
    }));
  });

  return (
    <MyGrid >
      {questions.filter((item) =>
        type==='answered'?item.alreadyAnswered:!item.alreadyAnswered)
          .map((item) => (
            <QuestionCard
              key={item.id}
              idQuestion={item.id}
              Inner={CardDetailHome}
              title={(name)=>`${name} asks:`}
            />
          ))}
    </MyGrid>
  );
};

ListQuestions.propTypes = {
  type: PropTypes.string,
};
