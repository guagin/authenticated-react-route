import React from 'react';
import './App.css';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Nav from './page/nav';
import { router } from './router';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"></header> */}
      <Router history={history}>
        <Nav />
        <Route component={router} />
      </Router>
    </div>
  );
}

export default App;
