import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '2px solid lightblue',
    borderRadius: '5px',
    background: 'white',
  },
  box: {
    padding: '8px 1px',
    color: 'white',
    textAlign: 'right',
    margin: 0,
  },
  perc: {
    paddingRight: '1em',
  },
  percSmall: {
    paddingLeft: '1em',
    color: 'black',
  },
}));

/**
 * @decription component for a percentage bar
 * @param {Onject} props
 * @return {Component}
 */
export default function PercBox({part, total}) {
  const classes = useStyles();
  const perc = part / total;
  const color= perc >= 0.5?'#00dcff':'#f7dae6';
  return (
    <Box width="100%"
      display="flex"
      flexDirection="horizontal"
      className={classes.root}>
      <Box width={perc}
        bgcolor={color} p={1} my={0.5} className={classes.box}>
        {(perc > 0.3) && (
          <Typography variant="caption" gutterBottom className={classes.perc}>
            {`${(perc*100).toFixed(0)} %`}
          </Typography>
        )}
      </Box>
      {(perc <= 0.3) && (
        <Box width={0.5}
          bgcolor="white" p={1} my={0.5} className={classes.box}>
          <Typography
            variant="caption" gutterBottom className={classes.percSmall}>
            {`${(perc*100).toFixed(0)} %`}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

PercBox.propTypes = {
  part: PropTypes.number,
  total: PropTypes.number,
};
