import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import React from 'react';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const useStyle = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function QuestionCard(props) {
  const {userName, alreadyAnswered, userAvatar} =
    useSelector(({questions, users, authedUser}) => {
      const question = questions[props.idQuestion];
      return {
        userName: users[question.author].name,
        userAvatar: users[question.author].avatarURL,
        alreadyAnswered: authedUser?users[authedUser].answers[props.idQuestion]:
          false,
      };
    });

  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label={`avatar of ${userName}`}
            className={classes.avatar}
            src={userAvatar}/>
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
