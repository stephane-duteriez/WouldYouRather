import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {PropTypes} from 'prop-types';


/**
 * @description route need to be loged in
 * @param {object} param0
 * @return {Component}
 */
export default function PrivateRoute({children, ...rest}) {
  const authedUser = useSelector(({authedUser}) => {
    return authedUser;
  });

  return (
    <Route
      {...rest}
      render={({location}) => {
        return (authedUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        ));
      }}
    />
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.object,
};
