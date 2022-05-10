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

    case "CHANGE_DATA_ON_NOW_PAGE":
      return {...store, dataOnPage: payload}

    case "CHANGE_DATA_FROM_FILTER":
      return {...store, dataFromFilter: payload}

    case "CHANGE_INPUT_SEARCH":
      return {...store, inputSearch: payload}

    case "CHANGE_SORT_MAIN":
      return {...store, dataOfSort: { ...store.dataOfSort, main: payload}}

    case "CHANGE_SORT_ID":
      return {...store, dataOfSort: { ...store.dataOfSort, sortID: payload}}

    case "CHANGE_SORT_HEADER":
      return {...store, dataOfSort: { ...store.dataOfSort, sortHead: payload}}

    case "CHANGE_SORT_DESCR":
      return {...store, dataOfSort: { ...store.dataOfSort, sortDescr: payload}}

    default:
      return store
  }
}

const store = createStore(reducer, {
  dataFromFetch: emptyList,
  dataFromFilter: [],
  dataOnPage: [],
  nowPage: '/1',
  maxPage: 1,
  inputSearch: '',
  dataOfSort: {
    main: 'ID',
    sortID: true,
    sortHead: false,
    sortDescr: false
  }
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
