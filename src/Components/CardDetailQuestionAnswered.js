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
export default function CardDetailQuestionAnswered(
    {alreadyAnswered, idQuestion}) {
  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Results:
      </Typography>
      <ResultDisplay
        isMyAnswer={alreadyAnswered==='optionOne'?'My answer':''}
        option="optionOne"
        idQuestion={idQuestion}
      />
      <ResultDisplay
        isMyAnswer={alreadyAnswered==='optionTwo'?'My answer':''}
        option="optionTwo"
        idQuestion={idQuestion}
      />
    </Grid>
  );
};

CardDetailQuestionAnswered.propTypes = {
  idQuestion: PropTypes.string,
  alreadyAnswered: PropTypes.string,
};
