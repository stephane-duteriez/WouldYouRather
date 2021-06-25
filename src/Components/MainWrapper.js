import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: '1em',
  },
}));

/**
 * @description Home Container
 * @param {object} props
 * @return {Component}
 */
export default function MainWrapper(props) {
  const classes = useStyles();

  return (
    <Container >
      <Paper square className={classes.paper}>
        {props.children}
      </Paper>
    </Container>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.node,
};
