import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import PercBox from './PercBox';

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
export default function ResultDisplay({option, idQuestion, isMyAnswer}) {
  const classes = useStyles();
  const {optionLabel, part, total} =
    useSelector(({questions}) => {
      const question = questions[idQuestion];
      if (question) {
        return {
          optionLabel: question[option].text,
          part: question[option].votes.length,
          total: question.optionOne.votes.length +
            question.optionTwo.votes.length,
        };
      }
      return ({});
    });
  return (
    <Badge color="primary"
      className={classes.margin}
      badgeContent={isMyAnswer || null}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}>
      <Grid container>
        <Typography variant="body1" gutterBottom>
          {optionLabel}
        </Typography>
        <PercBox
          part={part}
          total={total} />
      </Grid>
    </Badge>
  );
};

ResultDisplay.propTypes = {
  isMyAnswer: PropTypes.string,
  idQuestion: PropTypes.string,
  option: PropTypes.string,
};
