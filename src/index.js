import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configure as configureMobX } from 'mobx';

// This makes MobX throw an error if we try to directly change an observable property on a store.
// It forces us to use action methods, which is a best practice.
configureMobX({ enforceActions: 'observed' });

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
