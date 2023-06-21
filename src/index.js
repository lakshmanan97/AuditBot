import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import {Provider} from 'react-redux';
import loginreducer from './Store/reducer/loginreducer';
import filterreducer from './Store/reducer/grcfilterreducer';
import controlreducer from './Store/reducer/controlreducer';
import licensereducer from './Store/reducer/licensereducer';
import sidebar from './Store/reducer/sidebarreducer';
import thunk from 'redux-thunk';
import axios from 'axios';

//axios.defaults.baseURL = 'http://ec2-174-129-107-108.compute-1.amazonaws.com:8080';
axios.defaults.baseURL = 'http://ec2-34-227-107-78.compute-1.amazonaws.com:8080/';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer=combineReducers({  
  login:loginreducer,
  filter:filterreducer,
  sidebar:sidebar,
  control:controlreducer,
  licensefilter:licensereducer
})
const store=createStore(reducer,composeEnhancers(applyMiddleware(thunk))) 

ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
