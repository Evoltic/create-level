import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar.js'
import TableContainer from './containers/TableContainer.js';
import Info from './components/Info.js';
import Setting from './components/setting/Setting.js';
import Result from './components/Result.js';
import ColorBarContainer from './containers/ColorBarContainer.js';


const App = () => (
  <div>
    <Navbar />
    <main>
      <Route path="/" component={TableContainer}/>
      <Route exact path="/info" component={Info} />
      <Route exact path="/result" component={Result} />
      <Route exact path="/setting" component={Setting}/>
      <ColorBarContainer />
    </main>
  </div>
)


export default App;
