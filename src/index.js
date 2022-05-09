import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import {
  emptyList,
} from './utils/constants.js'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (store, {type, payload}) => {
  switch (type) {
    case "GET_DATA":
      return {...store, dataFromFetch: payload}

    case "CHANGE_PAGE":
      return {...store, nowPage: payload}

    case "CHANGE_MAX_PAGE":
      return {...store, maxPage: payload}

    default:
      return store
  }
}

const store = createStore(reducer, {
  dataFromFetch: emptyList,
  dataFromFilter: [],
  nowPage: '/1',
  maxPage: 1,
  inputSearch: ''
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)

reportWebVitals()
