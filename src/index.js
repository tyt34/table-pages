import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
  check: true
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "changeCheck":
      return {...state, check: !state.check}
    default:
      return state
  }
}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
/*
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
