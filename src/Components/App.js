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
  const {authedUser, loadingBar} =
    useSelector(({authedUser, users, loadingBar}) => {
      return {
        authedUser: authedUser,
        loadingBar: loadingBar,
      };
    });


  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <Router>
      <Fragment >
        <LoadingBar />
        {loadingBar.default===0?(
          <Fragment>
            <Route exact path="/login" >
              <Login />
            </Route>
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
        ):null}
      </Fragment>
    </Router>
  );
}

export default connect()(App);
