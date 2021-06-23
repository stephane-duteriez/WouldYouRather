import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGRoup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

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
export default function CardDetailQuestionNotAnswered(props) {
  const classes = useStyle();
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Would you rather ...
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            value="optionOne"
            control={<Radio color="primary"/>} label={props.optionOne} />
          <FormControlLabel
            value="optionTwo"
            control={<Radio color="primary"/>}
            label={props.optionTwo} />
        </RadioGroup>
      </FormControl>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        href={`/questions/${props.idQuestion}`}>
        Submit
      </Button>
    </Grid>
  );
};

CardDetailQuestionNotAnswered.propTypes = {
  idQuestion: PropTypes.string,
  optionOne: PropTypes.string,
  optionTwo: PropTypes.string,
};
