import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MyAvatar from './MyAvatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 345,
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
  console.log('in userCard', user);
  return user && (
    <Card className={classes.root}>
      <CardContent >
        <Grid container spacing={2}>
          <MyAvatar userId={user.id}/>
          <Grid item>
            {user.name}
          </Grid>
          <Grid item>
            <p>Score</p>
            {Object.keys(user.answers).length + user.questions.length}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  ) || null;
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
};
