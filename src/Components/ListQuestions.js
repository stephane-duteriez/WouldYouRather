import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import QuestionCard from './QuestionCard';
import CardDetailHome from './CardDetailHome';

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
export default function ListQuestions(props) {
  const questions = useSelector(({questions, users, authedUser}) => {
    return Object.keys(questions).map((idQuestion) => ({
      id: idQuestion,
      alreadyAnswered: authedUser?users[authedUser].answers[idQuestion]:false,
    }));
  });

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center">
      {questions.filter((item) =>
        props.type==='answered'?item.alreadyAnswered:!item.alreadyAnswered)
          .map((item) => (
            <Grid item key={item.id} >
              <QuestionCard
                idQuestion={item.id}
                Inner={CardDetailHome}
                title={(name)=>`${name} asks:`}
              />
            </Grid>
          ))}
    </Grid>
  );
};

ListQuestions.propTypes = {
  type: PropTypes.string,
};
