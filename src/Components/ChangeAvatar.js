import React from 'react';
import MainWrapper from './MainWrapper';
import MyGrid from './MyGrid';
import CardSelectAvatar from './CardSelectAvatar';
/**
 * ChangeAvatar Component
 * @param {object} props
 * @return {Component}
 */
export default function Login() {
  return (
    <MainWrapper>
      <MyGrid>
        <CardSelectAvatar />
      </MyGrid>
    </MainWrapper>
  );
}
