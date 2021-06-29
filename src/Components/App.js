import React, {useEffect, Fragment} from 'react';
import MyAppBar from './MyAppBar';
import {connect, useDispatch, useSelector} from 'react-redux';
import {handleInitialData} from '../actions/shared';
import HomeContainer from './HomeContainer';
import Question from './Question';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import PrivateRoute from './PrivateRoute';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import Login from './Login';

/**
* @descriptionMain Component
* @return {Component} App
*/
function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector(({authedUser}) => {
    return authedUser;
  });

  useEffect(() => {
    dispatch(handleInitialData());
  });

  return (
    <Router>
      <Fragment >
        <Route exact path="/login" >
          <Login />
        </Route>
        <LoadingBar />
        <div className="App">
          {authedUser?(<MyAppBar />):null}
          <PrivateRoute path="/questions/:idQuestion">
            <Question />
          </PrivateRoute>
          <PrivateRoute path="/add">
            <NewQuestion />
          </PrivateRoute>
          <PrivateRoute path="/leaderboard">
            <LeaderBoard />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <HomeContainer />
          </PrivateRoute>
        </div>
      </Fragment>
    </Router>
  );
}

export default connect()(App);
