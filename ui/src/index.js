import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__;

const reducers = () => {};
const store = createStore(reducers, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

