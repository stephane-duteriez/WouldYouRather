import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import PercBox from './PercBox';

/**
 * @description Detail for the Card on Home
 * @param {Object} props
 * @return {Component}
 */
export default function CardDetailQuestionAnswered(props) {
  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Result:
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.optionOne}
      </Typography>
      <PercBox
        part={props.nbrVotesOne}
        total={props.nbrVotesTwo+props.nbrVotesOne} />
      <Typography variant="body1" gutterBottom>
        {props.optionTwo}
      </Typography>
      <PercBox
        part={props.nbrVotesTwo}
        total={props.nbrVotesTwo+props.nbrVotesOne} />
    </Grid>
  );
};

CardDetailQuestionAnswered.propTypes = {
  optionOne: PropTypes.string,
  optionTwo: PropTypes.string,
  nbrVotesOne: PropTypes.number,
  nbrVotesTwo: PropTypes.number,
  alreadyAnsered: PropTypes.string,
};
