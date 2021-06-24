import React from 'react';
import {useSelector} from 'react-redux';
import MainWrapper from './MainWrapper';
import MyGrid from './MyGrid';
import UserCard from './UserCard';

/**
 * LeaderBoard Component
 * @return {Component}
 */
export default function LeaderBoard() {
  const users = useSelector(({users}) => {
    return Object.keys(users);
  });
  return (
    <MainWrapper>
      <MyGrid>
        {users.map((user) => (
          <UserCard key={user} id={user}/>
        ))}
      </MyGrid>
    </MainWrapper>
  );
};
