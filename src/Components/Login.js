import React from 'react';
import {useSelector} from 'react-redux';
import MainWrapper from './MainWrapper';
import MyGrid from './MyGrid';
import CardLogin from './CardLogin';

/**
 * LeaderBoard Component
 * @return {Component}
 */
export default function Login() {
  const users = useSelector(({users}) => {
    return users;
  });
  return (
    <MainWrapper>
      <MyGrid>
        <CardLogin users={users}/>
      </MyGrid>
    </MainWrapper>
  );
};
