import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    padding: '8px 1px',
  },
}));

/**
 * @description Detail for the Card on Home
 * @param {Object} props
 * @return {Component}
 */
export default function CardDetailQuestionAnswered(props) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Result:
      </Typography>
      <Typography variant="body1" gutterBottom>
        {props.optionOne}
      </Typography>
      <Box width="100%">
        <Box width={props.nbrVotesOne /(props.nbrVotesOne + props.nbrVotesTwo)}
          bgcolor="blue" p={1} my={0.5} className={classes.box}>
        </Box>
        {`${props.nbrVotesOne /(props.nbrVotesOne + props.nbrVotesTwo)*100} %`}
      </Box>
      <Typography variant="body1" gutterBottom>
        {props.optionTwo}
      </Typography>
      <Box width="100%">
        <Box width={props.nbrVotesTwo / (props.nbrVotesOne + props.nbrVotesTwo)}
          bgcolor="#779bd8" p={1} my={0.5} className={classes.box}>
        </Box>
        {`${props.nbrVotesTwo / (props.nbrVotesOne + props.nbrVotesTwo)*100} %`}
      </Box>
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
