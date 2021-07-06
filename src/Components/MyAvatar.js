import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';

const useStylesBig = makeStyles((theme) => ({
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

const useStylesSmall = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 10,
  },
  image: {
    padding: 10,
    width: theme.spacing(6),
    heigt: theme.spacing(6),
  },
}));

/**
 * @description Component QuestionCard
 * @param {Object} props
 * @return {Component}
 */
export default function MyAvatar({userId, small}) {
  const classes = small?useStylesSmall():useStylesBig();
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
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      className={classes.image}>
      <Avatar
        aria-label={`avatar of ${userName}`}
        className={classes.avatar}
        src={userAvatar}/>
    </Grid>
  );
}

MyAvatar.propTypes = {
  userId: PropTypes.string,
  small: PropTypes.bool,
};
