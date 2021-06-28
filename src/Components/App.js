import React, {useEffect, Fragment} from 'react';
import MyAppBar from './MyAppBar';
import {connect, useDispatch} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import HomeContainer from './HomeContainer';
import Question from './Question';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';

/**
* @descriptionMain Component
* @return {Component} App
*/
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  });
  return (
    <Router>
      <Fragment >
        <LoadingBar />
        <div className="App">
          <MyAppBar />
          <Route path="/questions/:idQuestion">
            <Question />
          </Route>
          <Route path="/add">
            <NewQuestion />
          </Route>
          <Route path="/leaderboard">
            <LeaderBoard />
          </Route>
          <Route exact path="/">
            <HomeContainer />
          </Route>
        </div>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
