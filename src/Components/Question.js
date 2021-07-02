import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import MyGrid from './MyGrid';
import QuestionCard from './QuestionCard';
import CardDetailQuestionNotAnswered from './CardDetailQuestionNotAnswered';
import CardDetailQuestionAnswered from './CardDetailQuestionAnswered';
import MainWrapper from './MainWrapper';

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
function Question({match}) {
  const {idQuestion} = match.params;
  const alreadyAnswered = useSelector(({users, authedUser}) => {
    return (authedUser?
        users[authedUser].answers[idQuestion]:
        false);
  });
  return (
    <MainWrapper>
      <MyGrid >
        <QuestionCard
          idQuestion={idQuestion}
          Inner={alreadyAnswered?
            CardDetailQuestionAnswered:
            CardDetailQuestionNotAnswered}
          title={(name)=>`${name} asks:`}
        />
      </MyGrid>
    </MainWrapper>
  );
};

Question.propTypes = {
  match: PropTypes.object,
};

export default withRouter(Question);
