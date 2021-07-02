import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

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
export default function CardDetailHome({idQuestion}) {
  const history = useHistory();
  const classes = useStyle();
  const toParent = (e, id) => {
    e.preventDefault();
    history.push(`/questions/${id}`);
  };
  const optionOne = useSelector(({questions}) => {
    return questions[idQuestion].optionOne.text;
  });

  return (
    <Grid item xs={12} sm>
      <Typography variant="h6" gutterBottom>
        Would you rather
      </Typography>
      <Typography variant="body1" gutterBottom>
        {`...${optionOne}...`}
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        className={classes.button}
        onClick={(e) => toParent(e, idQuestion)}>
        View Pull
      </Button>
    </Grid>
  );
};

CardDetailHome.propTypes = {
  idQuestion: PropTypes.string,
};
