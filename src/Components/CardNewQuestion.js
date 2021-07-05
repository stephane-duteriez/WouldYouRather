import React from 'react';
import Card from '@material-ui/core/Card';
import MyCardHeader from './MyCardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from 'react-router';
import {useDispatch} from 'react-redux';
import {handleAddQuestion} from '../actions/questions';

const useStyle = makeStyles({
  root: {
    maxWidth: 400,
  },
  button: {
    width: '100%',
    marging: 2,
  },
});

/**
 * @description Detail for the Card on Home
 * @param {Object} props
 * @return {Component}
 */
export default function CardNewQuestion() {
  const history = useHistory();
  const classes = useStyle();
  const [optionOne, setOptionOne] = React.useState('');
  const [optionTwo, setOptionTwo] = React.useState('');
  const [errorOne, setErrorOne]= React.useState('');
  const [errorTwo, setErrorTwo]= React.useState('');

  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.id==='optionOne') {
      setOptionOne(event.target.value);
      setErrorOne('');
    } else {
      setOptionTwo(event.target.value);
      setErrorTwo('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (optionOne !== '' && optionTwo !== '') {
      dispatch(handleAddQuestion(optionOne, optionTwo));
      history.push('/');
      return;
    }
    if (optionOne==='') {
      setErrorOne('You have to give people an option!');
    }
    if (optionTwo==='') {
      setErrorTwo('You have to give people an option!');
    }
  };

  return (
    <Card className={classes.root}>
      <MyCardHeader
        title="Create New Question" />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Complete the question
        </Typography>
        <Typography variant="h4" gutterBottom>
          Would you rather ...
        </Typography>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            error={errorOne!==''}
            id="optionOne"
            label="optionOne"
            value={optionOne}
            onChange={handleChange}
            fullWidth
            placeholder="Enter qestion one text here"
            helperText={errorOne}
          />
          <Typography variant="body1" gutterBottom>
            Or
          </Typography>
          <TextField
            error={errorTwo!==''}
            id="optionTwo"
            label="optionTwo"
            value={optionTwo}
            onChange={handleChange}
            placeholder="Enter qestion two text here"
            fullWidth
            helperText={errorTwo}
          />
        </form>
      </CardContent>
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.button}
        onClick={handleSubmit}>
        Submit
      </Button>
    </Card>
  );
};
