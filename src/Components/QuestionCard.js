import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import MyCardHeader from './MyCardHeader';
import MyAvatar from './MyAvatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
}));

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function QuestionCard({idQuestion, Inner, title}) {
  const classes = useStyles();
  const question =
    useSelector(({questions, users, authedUser}) => {
      const question = questions[idQuestion];
      if (question) {
        return {
          authorId: question.author,
          userName: users[question.author].name,
          alreadyAnswered: authedUser?
            users[authedUser].answers[idQuestion]:
            false,
        };
      }
      return (null);
    });
  if (question) {
    return (
      <Card className={classes.root}>
        <MyCardHeader
          title={title(question.userName, question.alreadyAnswered)}
        />
        <CardContent >
          <Grid container spacing={2}>
            <MyAvatar userId={question.authorId}/>
            <Inner
              alreadyAnswered={question.alreadyAnswered}
              idQuestion={idQuestion}
            />
          </Grid>
        </CardContent>
      </Card>
    );
  } else {
    return (
      <div>
        <h3>
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
};

QuestionCard.propTypes = {
  idQuestion: PropTypes.string.isRequired,
  Inner: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
};
