import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ResultDisplay from './ResultDisplay';
import PropTypes from 'prop-types';

/**
 * @description Detail for the Card on Home
 * @param {Object} props
 * @return {Component}
 */
export default function CardDetailQuestionAnswered(props) {
  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Results:
      </Typography>
      <ResultDisplay
        isMyAnswer={props.alreadyAnswered==='optionOne'?'My answer':0}
        labelOption={props.optionOne}
        part={props.nbrVotesOne}
        total={props.nbrVotesTwo+props.nbrVotesOne}
      />
      <ResultDisplay
        isMyAnswer={props.alreadyAnswered==='optionTwo'?'My answer':0}
        labelOption={props.optionTwo}
        part={props.nbrVotesTwo}
        total={props.nbrVotesTwo+props.nbrVotesOne}
      />
    </Grid>
  );
};

CardDetailQuestionAnswered.propTypes = {
  optionOne: PropTypes.string,
  optionTwo: PropTypes.string,
  nbrVotesOne: PropTypes.number,
  nbrVotesTwo: PropTypes.number,
  alreadyAnswered: PropTypes.string,
};
