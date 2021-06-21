import React, {useEffect} from 'react';
import MyAppBar from './MyAppBar';
import {connect, useDispatch} from 'react-redux';
import {handleInitialData} from '../actions/shared';

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
    <div className="App">
      <MyAppBar />
    </div>
  );
}

export default connect()(App);
