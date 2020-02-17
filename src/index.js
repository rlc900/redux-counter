import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux'
import reducers from './Redux/reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers)





ReactDOM.render(<App store={store}/>, document.getElementById('root'));








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
