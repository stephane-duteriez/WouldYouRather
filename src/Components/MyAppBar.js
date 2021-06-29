import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MyMenu from './MyMenu';
import {useDispatch} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

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
}));

/**
* @description Component top bar of the application
* @return {Component} MyAppBar
*/
export default function MyAppBar() {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <MyMenu />
          <Typography
            variant="h6"
            className={classes.title} >
                        My Would You Rather App
          </Typography>
          <Button
            variant="body2"
            color="inherit"
            onClick={()=>dispatch(setAuthedUser(null))}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
