import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  myGrid: {
    paddingTop: '1em',
  },
}));

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
export default function MyGrid(props) {
  const childrens = props.children.map?[...props.children]:[props.children];
  const classes = useStyle();
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
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
