import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TableRow from './TableRow/TableRow'
import {
  emptyObj, amountStringsOnPage, getNumFromNowPage,
  sortIDUp, sortIDDown, sortHeadUp, sortHeadDown,
  sortDescrUp, sortDescrDown
} from '../../../utils/constants.js'
import './TableList.css'

function TableList(props) {
  const dispatch = useDispatch()
  const nowPageFromStore = useSelector( store => store.nowPage)
  const [currentList, setCurrentList] = useState([])
  const fullData = useSelector( store => store.dataFromFetch)
  const dataFromFilter = useSelector( store => store.dataFromFilter)
  const inputSearch = useSelector( store => store.inputSearch)
  const dataOfSort = useSelector( store => store.dataOfSort)

  useEffect( () => {
    const arrForThisPage = []
    const startCycle = (getNumFromNowPage(nowPageFromStore) * amountStringsOnPage) - amountStringsOnPage
    const endCycle = (getNumFromNowPage(nowPageFromStore) * amountStringsOnPage) - 1

    let dataForWatch
    if (dataFromFilter.length) {
      dataForWatch = dataFromFilter
    } else {
      if (inputSearch === '') {
        dataForWatch = fullData
      } else {
        dataForWatch = dataFromFilter
      }
    }

    dataForWatch.forEach( (el, i) => {
      if ((i >= startCycle) && (i <= endCycle)) {
        const cloneEmptyObj = Object.assign({}, emptyObj)
        cloneEmptyObj.id = el.id
        cloneEmptyObj.numId = el.id
        cloneEmptyObj.header = el.title
        cloneEmptyObj.description = el.body
        arrForThisPage.push(cloneEmptyObj)
      }
    })
    if (arrForThisPage.length < amountStringsOnPage) {
      for (let i=arrForThisPage.length; arrForThisPage.length<amountStringsOnPage; i++) {
        const cloneEmptyObj = Object.assign({}, emptyObj)
        cloneEmptyObj.id = -i // чтобы не произошло совпадения по key в map.
        arrForThisPage.push(cloneEmptyObj)
      }
    }
    // это необходимо, чтобы при переходе на другую страницу порядок сортировки сохранился
    if (dataOfSort.main === 'ID') {
      if (!dataOfSort.sortID) {
        arrForThisPage.sort(sortIDUp)
      } else {
        arrForThisPage.sort(sortIDDown)
      }
    } else if (dataOfSort.main === 'Заголовок') {
      if (!dataOfSort.sortHead) {
        arrForThisPage.sort(sortHeadUp)
      } else {
        arrForThisPage.sort(sortHeadDown)
      }
    } else if (dataOfSort.main === 'Описание') {
      if (!dataOfSort.sortDescr) {
        arrForThisPage.sort(sortDescrUp)
      } else {
        arrForThisPage.sort(sortDescrDown)
      }
    }
    dispatch({ type: 'CHANGE_DATA_ON_NOW_PAGE', payload: arrForThisPage})
    dispatch({ type: 'CHANGE_MAX_PAGE', payload: Math.ceil(dataForWatch.length / amountStringsOnPage)}) // необходимо определить, какое может быть максимальное количество страниц
    setCurrentList(arrForThisPage)
  }, [fullData, nowPageFromStore, dataFromFilter])

  return (
    <>
    <table className="list">
      <tbody>
        {
          currentList.map( (tr) =>
            (
              <TableRow
                key={tr.id}
                numId={tr.numId}
                header={tr.header}
                description={tr.description}
              />
            )
          )
        }
      </tbody>
    </table>
    </>
  )
}

export default TableList
