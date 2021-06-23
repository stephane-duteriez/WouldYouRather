import React, {useEffect} from 'react';
import MyAppBar from './MyAppBar';
import {connect, useDispatch} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import HomeContainer from './HomeContainer';
import Question from './Question';
import {BrowserRouter as Router, Route} from 'react-router-dom';


/**
* @descriptionMain Component
* @param {object} props
* @return {Component} App
*/
function App(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Router>
      <div className="App">
        <MyAppBar />
        <Route path="/questions/:idQuestion">
          <Question />
        </Route>
        <Route path="/add">
          Add question
        </Route>
        <Route path="/leaderboard">
          Leaderboard
        </Route>
        <Route exact path="/">
          <HomeContainer />
        </Route>
      </div>
    </Router>
  );
}

export default connect()(App);
