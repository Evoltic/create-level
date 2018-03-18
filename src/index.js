import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import setting from './reducer/index.js'
import './index.css';
import App from './App.js'

import { loadState, saveState } from './localStorage/index.js'

import throttle from 'lodash/throttle'

import './fontawesome-all.js';

import registerServiceWorker from './registerServiceWorker';


const history = createHistory();

const store = createStore(setting,
  loadState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(throttle(() => {
  saveState({
    array: store.getState().array,
    items: store.getState().items,
    selectedElement: store.getState().selectedElement
  })
}, 1000))


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path={process.env.PUBLIC_URL + "/"} component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker();
