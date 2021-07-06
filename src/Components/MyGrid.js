import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles({
  myGrid: {
    paddingTop: '1em',
  },
});

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
export default function MyGrid({children}) {
  // if only one children, we have directly the node but not a array
  const childrens = children.map?[...children]:[children];
  const classes = useStyle();
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="center"
      alignItems="center"
      className={classes.myGrid}>
      {childrens.map((children)=>
        <Grid item key={`grid${children.key}`}>
          {children}
        </Grid>)}
    </Grid>
  );
};

MyGrid.propTypes = {
  children: PropTypes.node,
};
