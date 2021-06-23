import React from 'react';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {Grid} from '@material-ui/core';
import QuestionCard from './QuestionCard';
import CardDetailQuestionNotAnswered from './CardDetailQuestionNotAnswered';
import CardDetailQuestionAnswered from './CardDetailQuestionAnswered';

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
function Question(props) {
  const {idQuestion} = props.match.params;
  const alreadyAnswered = useSelector(({users, authedUser}) => {
    return (authedUser?
        users[authedUser].answers[idQuestion]:
        false);
  });
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justify="center"
      alignItems="center">
      <Grid item>
        <QuestionCard
          idQuestion={idQuestion}
          Inner={alreadyAnswered?
            CardDetailQuestionAnswered:
            CardDetailQuestionNotAnswered}
          title={(name)=>`${name} asks:`}
        />
      </Grid>
    </Grid>
  );
};

Question.propTypes = {
  match: PropTypes.object,
};

export default withRouter(Question);
