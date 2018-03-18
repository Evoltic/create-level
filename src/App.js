import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js'
import TableContainer from './containers/TableContainer.js';
import Setting from './components/setting/Setting.js';
import Result from './components/Result.js';
import ColorBarContainer from './containers/ColorBarContainer.js';


const App = () => (
  <div>
    <Navbar />
    <main>
      <Route path={process.env.PUBLIC_URL + "/"} component={TableContainer}/>
      <Route exact path={process.env.PUBLIC_URL + "/result"} component={Result} />
      <Route exact path={process.env.PUBLIC_URL + "/setting"} component={Setting}/>
      <ColorBarContainer />
    </main>
  </div>
)


export default App;
