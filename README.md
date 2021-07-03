<h1 align="center">The Would You Rather App</h1>

### Description

The Would You Rather App, allow you to create fast very simple survey to get opinoins all around the word, and help you making better choices in your life.
This is is one of the project required to complete the React nanodegre from Udacity.
The Would You Rather App demonstarte the use of Redux with React.

### Instalation
To get started :

* install all project dependencies with `npm install`
* start the development server with `npm start`

### Features
* login page
* creat new questions and share them with others users
* answer questions you created or created by others users
* result page, to see how people answered
* leaderboard to hilight the most active users

### technologie
* React
* Material-ui
* use a mock server to simulate API calls, **not ready for production**

### know bugs
* there is a console error caused by the use material-ui du to the use of the Strict mode (only show in dev). It should be fix in the next version of matrial-ui.

### to fix before submitting
- actually on login the loading bar show at the same time as the login form. The form should only appered once the loading is finish.
- show error if nothing selected on answer page
- show an error of empty field on new question form
- there is an error sometimes on 'votes on undefined' but it is not all the time, maybe a problem d'asynchronisme.
- after login, redirect to the page the user wanted to access
- if the poll/page doesn't exist show a 404 page
- Invalid prop `Inner` supplied to `QuestionCard`, expected a ReactNode. appeard sometime?

### To come ###

- page to create a new user
- page to change the avatar of the authed user

### License

MIT License

Copyright (c) 2021 Th Would You Rather App

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.