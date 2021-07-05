import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import MyCardHeader from './MyCardHeader';
import CardContent from '@material-ui/core/CardContent';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import {handleChangeAvatar} from '../actions/users';

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
  },
  formControl: {
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    marging: 2,
  },
}));

/**
 * @description Detail for the Card to select an avatar
 * @param {Object} props
 * @return {Component}
 */
export default function CardSelectAvatar() {
  const dispatch = useDispatch();
  const classes = useStyle();
  const avatars = useSelector(({avatars}) => {
    return avatars;
  });
  const [selectAvatar, setSelectAvatar] = React.useState('');
  const handleChange = (event) => {
    setSelectAvatar(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(handleChangeAvatar(selectAvatar));
  };

  return (
    <Card className={classes.root}>
      <MyCardHeader
        title="Change yout avatar!"/>
      <CardContent>
        <form className={classes.root} noValidate autoComplete="off">
          <FormControl className={classes.formControl} >
            <Select
              autoWidth
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={selectAvatar}
              onChange={handleChange}
              label="user"
            >
              <MenuItem value="" disabled>
                <em>None</em>
              </MenuItem>
              {avatars.map((avatar) => (
                <MenuItem
                  key={avatar.id}
                  value={avatar.image}>
                  <Avatar
                    className={classes.avatar}
                    src={avatar.image}/>
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
        Select
      </Button>
    </Card>
  );
}
