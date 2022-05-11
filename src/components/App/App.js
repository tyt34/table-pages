import React, { useEffect } from 'react'
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ChangePage from '../ChangePage/ChangePage'
import Table from '../Table/Table'
import Search from '../Search/Search'
import { maxAmountStringsOnPage } from '../../utils/constants.js'
import { getInformation } from '../../utils/api.js'
import './App.css'

const isProducttion = process.env.REACT_APP_PRODUCTION
let base
if (isProducttion !== 'dev') {
  base = '/table-pages'
} else {
  base = '/'
}

function App() {
  const dispatch = useDispatch()
  const nowPageFromStore = useSelector( store => store.nowPage)

  useEffect( () => {
    getInformation()
    .then( res => {
      dispatch({ type: 'GET_DATA', payload: res}) // получение данных при первой загрузки приложения
      dispatch({ type: 'CHANGE_MAX_PAGE', payload: res.length / maxAmountStringsOnPage}) // необходимо определить, какое может быть максимальное количество страниц
    })
    .catch( e => {
      console.log(' er1 ', e)
    })
  }, [])

  return (
    <section className="app">
      <HashRouter basename={base}>
        <Routes>
          <Route path="/1" element={
            <>
              <Search
              />
              <Table
              />
              <ChangePage
              />
            </>
          } />
          <Route path={nowPageFromStore} element={
            <>
              <Search
              />
              <Table
              />
              <ChangePage
              />
            </>
          } />
          <Route path="/*" element={<Navigate replace to="/1" />} />
        </Routes>
      </HashRouter>
    </section>
  )
}

export default App
