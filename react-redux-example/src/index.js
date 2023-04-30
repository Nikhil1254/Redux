import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import accountReducer from './reducers/account'
import bonusReducer from './reducers/bonus';


const Store = createStore(
  combineReducers(
    {
      account: accountReducer,
      bonus: bonusReducer
    }
  ), applyMiddleware(logger, thunk)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App Store={Store} />
);

