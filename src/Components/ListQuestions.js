import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Grid} from '@material-ui/core';

/**
 * @descrition Component list of question
 * @param {object} props
 * @return {Component}
 */
function ListQuestions(props) {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center">
      {props.questions.map((item) => (
        <div key={item.id}>
          {item.id}
        </div>
      ))}
    </Grid>
  );
};

ListQuestions.propTypes = {
  questions: PropTypes.array,
};

/**
 * @description retrieve from store questionsIds
 * @param {object} param
 * @return {object} props
 */
function mapStateToProps({questions, users, authedUser}) {
  return {
    questions: Object.keys(questions).map((questionId) => ({
      id: questionId,
      alreadyAnswered: authedUser?users[authedUser].answers[questionId]:[],
    })),
  };
}

export default connect(mapStateToProps)(ListQuestions);
