import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyMenu from './MyMenu';
import {useDispatch, useSelector} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';
import MyAvatar from './MyAvatar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  name: {
    paddingLeft: '1em',
  },
}));

/**
* @description Component top bar of the application
* @return {Component} MyAppBar
*/
export default function MyAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const {userName, authedUser} =useSelector(({users, authedUser}) => {
    const user = users[authedUser];
    if (user) {
      return {
        userName: user.name,
        authedUser: authedUser,
      };
    }
    return ({});
  });
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MyMenu />
          <Link href='/' className={classes.title} color="inherit">
            <Typography
              variant="h6"
              className={classes.title} >
                          My Would You Rather App
            </Typography>
          </Link>
          <MyAvatar small={true} userId={authedUser}/>
          <Typography
            variant="body1"
            className={classes.name} >
            {userName}
          </Typography>
          <Button
            color="inherit"
            onClick={()=>dispatch(setAuthedUser(null))}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
