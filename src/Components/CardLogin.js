import React from 'react';
import Card from '@material-ui/core/Card';
import MyCardHeader from './MyCardHeader';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import {setAuthedUser} from '../actions/authedUser';

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  button: {
    width: '100%',
    marging: 2,
  },
}));

/**
 * @description Detail for the Card on Home
 * @param {Object} props
 * @return {Component}
 */
export default function CardLogin({users, location}) {
  const history = useHistory();
  const classes = useStyle();
  const [userAuthed, setUserAuthed] = React.useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setUserAuthed(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (userAuthed !== '') {
      dispatch(setAuthedUser(userAuthed));
      history.push(location);
    }
  };

  return (
    <Card className={classes.root}>
      <MyCardHeader
        title="Welcome to the Would You Rather App!"
        subtitle="please sign in to continue" />
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={userAuthed}
              onChange={handleChange}
              label="user"
            >
              <MenuItem value="" disabled>
                <em>None</em>
              </MenuItem>
              {Object.keys(users).map((userId) => (
                <MenuItem
                  key={userId}
                  value={userId}>
                  {users[userId].name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={handleSubmit}>
        Sign In
      </Button>
    </Card>
  );
};

CardLogin.propTypes = {
  users: PropTypes.object,
  location: PropTypes.object,
};
