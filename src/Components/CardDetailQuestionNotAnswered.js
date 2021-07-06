import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import {handleAddAnswer} from '../actions/questions';


const useStyle = makeStyles((theme) => ({
  button: {
    width: '100%',
  },
}));

/**
 * @description Detail for the Card on Home
 * @param {Object} props
 * @return {Component}
 */
export default function CardDetailQuestionNotAnswered({idQuestion}) {
  const classes = useStyle();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState(null);
  const {optionOne, optionTwo} = useSelector(({questions}) => {
    const question = questions[idQuestion];
    if (question) {
      return {
        optionOne: question.optionOne.text,
        optionTwo: question.optionTwo.text,
      };
    }
    return ({});
  });

  const handleChange = (event) => {
    setValue(event.target.value);
    setError(false);
    setHelperText(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(handleAddAnswer(idQuestion, value));
    } else {
      setError(true);
      setHelperText('Please select an option.');
    }
  };

  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Would you rather ...
      </Typography>
      <FormControl error={error} component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            value="optionOne"
            control={<Radio color="primary"/>} label={optionOne} />
          <FormControlLabel
            value="optionTwo"
            control={<Radio color="primary"/>}
            label={optionTwo} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        onClick={handleSubmit}>
        Submit
      </Button>
    </Grid>
  );
};

CardDetailQuestionNotAnswered.propTypes = {
  idQuestion: PropTypes.string,
};
