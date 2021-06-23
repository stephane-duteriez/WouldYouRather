import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    margin: 10,
  },
  image: {
    padding: 10,
    width: theme.spacing(12),
    heigt: theme.spacing(12),
  },
}));

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function QuestionCard(props) {
  const {idQuestion, title, Inner} = props;
  const classes = useStyles();
  const question =
    useSelector(({questions, users, authedUser}) => {
      const question = questions[idQuestion];
      if (question) {
        return {
          userName: users[question.author].name,
          userAvatar: users[question.author].avatarURL,
          optionOne: question.optionOne.text,
          nbrVotesOne: question.optionOne.votes.length,
          optionTwo: question.optionTwo.text,
          nbrVotesTwo: question.optionTwo.votes.length,
          alreadyAnswered: authedUser?
            users[authedUser].answers[props.idQuestion]:
            false,
        };
      }
      return ({});
    });
  return (
    <Card className={classes.root}>
      <CardHeader
        title={title(question.userName, question.alreadyAnswered)}
      />
      <CardContent >
        <Grid container spacing={2}>
          <Grid item className={classes.image}>
            <Avatar
              aria-label={`avatar of ${question.userName}`}
              className={classes.avatar}
              src={question.userAvatar}/>
          </Grid>
          <Inner
            optionOne={question.optionOne}
            optionTwo={question.optionTwo}
            nbrVotesOne={question.nbrVotesOne}
            nbrVotesTwo={question.nbrVotesTwo}
            alreadyAnswered={question.alreadyAnswereds}
            idQuestion={idQuestion}
          />
        </Grid>
      </CardContent>
    </Card>
  );
};

QuestionCard.propTypes = {
  idQuestion: PropTypes.string.isRequired,
  Inner: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
};
