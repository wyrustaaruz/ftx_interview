import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { HistoryRouter as Router } from 'redux-first-history/rr6';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { store, history } from 'store';

import './index.css';
import 'antd/dist/antd.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
