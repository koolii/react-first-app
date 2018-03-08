import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactReduxManual from './react-redux-all-in-one'
import REactReduxSeparate from './react-redux-separate-entry'
import ReactReduxNpm from './react-redux'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
