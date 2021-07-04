import React from 'react';
import {useSelector} from 'react-redux';
import MainWrapper from './MainWrapper';
import MyGrid from './MyGrid';
import CardLogin from './CardLogin';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';

/**
 * LeaderBoard Component
 * @param {object} props
 * @return {Component}
 */
export default function Login(props) {
  const location = useLocation();
  const {from} = location.state || {from: {pathname: '/'}};
  const users = useSelector(({users}) => {
    return users;
  });
  return (
    <MainWrapper>
      <MyGrid>
        <CardLogin users={users} location={from}/>
      </MyGrid>
    </MainWrapper>
  );
};

Login.propTypes = {
  location: PropTypes.object,
};
