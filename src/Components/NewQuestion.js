import React from 'react';
import {useSelector} from 'react-redux';
import MainWrapper from './MainWrapper';
import MyGrid from './MyGrid';
import CardNewQuestion from './CardNewQuestion';

/**
 * LeaderBoard Component
 * @return {Component}
 */
export default function NewQuestion() {
  const authedUser = useSelector(({authedUser}) => {
    return authedUser;
  });
  return (
    <MainWrapper>
      <MyGrid>
        <CardNewQuestion userId={authedUser}/>
      </MyGrid>
    </MainWrapper>
  );
};
