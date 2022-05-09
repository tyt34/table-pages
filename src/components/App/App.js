import React, { useState, useEffect, useRef } from 'react'
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
//import { useNavigate} from 'react-router-dom'
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
  //const navigate = useNavigate()
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
          <Route path="/*" element={<Navigate replace to="/1" />} />
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


/*
function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay])
}

useInterval(() => {
  let nowUrl = window.location.href.split('/')[window.location.href.split('/').length - 1]
  //console.log(nowPageFromStore)
  //console.log()
  if (nowUrl !== ('/'+nowPageFromStore)) {
    console.log(' изменение неожиданно ', nowUrl)
    dispatch({ type: 'CHANGE_PAGE', payload: ('/'+nowUrl)})
    navigate(('/'+nowUrl))
  }
  // ERRORRR -  Error: useNavigate() may be used only in the context of a <Router> component.
}, 5000)
*/
