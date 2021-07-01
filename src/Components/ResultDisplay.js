import React from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import PercBox from './PercBox';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  margin: {
    width: '90%',
    border: '2px solid lightblue',
    borderRadius: '5px',
    margin: '5px',
    padding: '10px',
    background: (props) => props.isMyAnswer?'#ecffe7':'white',
  },
});
/**
 * @description diplay the result to an answer
 * @param {object} props
 * @return {component}
 */
export default function ResultDisplay(props) {
  const classes = useStyles(props);
  return (
    <Badge color="primary"
      className={classes.margin}
      badgeContent={props.isMyAnswer}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
      <Grid container>
        <Typography variant="body1" gutterBottom fullwidth>
          {props.labelOption}
        </Typography>
        <PercBox
          part={props.part}
          total={props.total} />
      </Grid>
    </Badge>
  );
};

ResultDisplay.propTypes = {
  isMyAnswer: PropTypes.bool,
  labelOption: PropTypes.string,
  part: PropTypes.number,
  total: PropTypes.number,
};
