import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const useStyle = makeStyles({
  root: {
    width: 345,
  },
});

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function QuestionCard(props) {
  const {userName, alreadyAnswered} =
    useSelector(({questions, users, authedUser}) => {
      const question = questions[props.idQuestion];
      return {
        userName: users[question.author].name,
        alreadyAnswered: authedUser?users[authedUser].answers[props.idQuestion]:
          false,
      };
    });

  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        title={`somebody's name ${userName}`}
        subheader={alreadyAnswered?'Answered':'NotAnswered'}
      />
    </Card>
  );
};

QuestionCard.propTypes = {
  idQuestion: PropTypes.string,
};
