import React, { useState, useEffect, useRef } from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import ChangePage from '../ChangePage/ChangePage'
import Table from '../Table/Table'
import Search from '../Search/Search'
import { useDispatch, useSelector } from 'react-redux'
import {
  getInformation
} from '../../utils/api.js'
import {
  amountStringsOnPage
} from '../../utils/constants.js'

function App() {
  const [nowPage, setNowPage] = useState('/1')
  const dispatch = useDispatch()
  const nowPageFromStore = useSelector( store => store.nowPage)

  //console.log(' index: ', nowPageFromStore)
  useEffect( () => {
  }, [nowPage])

  useEffect( () => {
    getInformation()
    .then( res => {
      dispatch({ type: 'GET_DATA', payload: res}) // получение данных при первой загрузки приложения
      dispatch({ type: 'CHANGE_MAX_PAGE', payload: res.length / amountStringsOnPage}) // необходимо определить, какое может быть максимальное количество страниц
    })
    .catch( e => {
      console.log(' er1 ', e)
    })
  }, [])

  return (
    <section className="app">
      <HashRouter basename={'/'}>
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
          <Route path="/a" element={
            <>
              <Search
              />

            </>
          } />

        </Routes>
      </HashRouter>
    </section>
  )
}

export default App;

/*
//const BASENAME = '/'
//let base = BASENAME
// let base
/*
if (BASENAME === undefined) {
  base = '/simple-hotel-check'
} else {
  base = BASENAME
}
*/

/*
<Table
/>
<ChangePage
/>
*/
/*
<HashRouter basename={base}>
  <Routes>
    <Route path="/" element={
      <>
        <Main/>
      </>
    } />
    <Route path="/auth" element={
      <>
        <Auth/>
      </>
    } />
  </Routes>
</HashRouter>
*/
