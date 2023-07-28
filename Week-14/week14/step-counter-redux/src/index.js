import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import StepCounter from './stepCounter';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <StepCounter />
  </Provider>,
  document.getElementById('root')
);
