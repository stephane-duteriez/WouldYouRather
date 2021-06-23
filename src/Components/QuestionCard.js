import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {useSelector} from 'react-redux';

const useStyle = makeStyles((theme) => ({
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
  button: {
    width: '100%',
  },
}));

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function QuestionCard(props) {
  const {userName, userAvatar, optionOne} =
    useSelector(({questions, users}) => {
      const question = questions[props.idQuestion];
      return {
        userName: users[question.author].name,
        userAvatar: users[question.author].avatarURL,
        optionOne: question.optionOne.text,
        // alreadyAnswered: authedUser?users[authedUser]
        // .answers[props.idQuestion]:false,
      };
    });

  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardHeader
        title={`${userName} asked`}
      />
      <CardContent >
        <Grid container spacing={2}>
          <Grid item className={classes.image}>
            <Avatar
              aria-label={`avatar of ${userName}`}
              className={classes.avatar}
              src={userAvatar}/>
          </Grid>
          <Grid item xs={12} sm>
            <Typography variant="h6" gutterBottom>
              Would you rather
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`...${optionOne}...`}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              className={classes.button}
              href={`/question/${props.idQuestion}`}>
              View Pull
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

QuestionCard.propTypes = {
  idQuestion: PropTypes.string,
};
