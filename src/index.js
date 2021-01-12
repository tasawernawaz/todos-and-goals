import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import reducers from './reducers'
import middlewares from './middleware'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducers, middlewares)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


