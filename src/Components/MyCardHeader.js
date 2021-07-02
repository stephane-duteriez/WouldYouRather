import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  cardHeader: {
    background: '#7b9edc',
  },
}));


/**
 * @description Custom Card Header
 * @param {object} props
 * @return {component}
 */
export default function MyCardHeader({title}) {
  const classes = useStyle();
  return (
    <CardHeader
      title={title}
      className={classes.cardHeader}
    />
  );
};

MyCardHeader.propTypes = {
  title: PropTypes.string,
};
