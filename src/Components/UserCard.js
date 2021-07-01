import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MyAvatar from './MyAvatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
  },
  score: {
    borderRadius: '50%',
    backgroundColor: 'red',
    fontSize: '30px',
    margin: 'auto',
    textAlign: 'center',
    color: 'white',
    width: '60px',
    height: '52px',
    paddingTop: '7px',
  },
}));

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function UserCard(props) {
  const {id} = props;
  const classes = useStyles();
  const user =
    useSelector(({users}) => {
      return users[id];
    });
  return user && (
    <Card className={classes.root}>
      <CardContent >
        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-between"
          alignItems="center">
          <MyAvatar userId={user.id}/>
          <Grid item xs={7}>
            <Typography variant="h6" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`Answered questions: ${Object.keys(user.answers).length}`}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {`Created questions: ${Object.keys(user.questions).length}`}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant="body1"
              align="center"
              gutterBottom>Score</Typography>
            <div className={classes.score}>
              {Object.keys(user.answers).length + user.questions.length}
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ) || null;
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
};
