import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from 'react-redux';

const useStyles = makeStyles((theme) => ({
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
export default function MyAvatar(props) {
  const {userId} = props;
  const classes = useStyles();
  const {userName, userAvatar} =
    useSelector(({users}) => {
      const user = users[userId];
      if (user) {
        return {
          userName: user.name,
          userAvatar: user.avatarURL,
        };
      }
      return ({});
    });
  return (
    <Grid item className={classes.image}>
      <Avatar
        aria-label={`avatar of ${userName}`}
        className={classes.avatar}
        src={userAvatar}/>
    </Grid>
  );
}

MyAvatar.propTypes = {
  userId: PropTypes.string,
};