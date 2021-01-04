import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {rootReducer } from "../src/Pages/Store/RootReducers/index";
import { createStore,applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

const store = createStore(rootReducer ,composeWithDevTools(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

