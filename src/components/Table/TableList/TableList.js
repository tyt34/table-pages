import './TableList.css'
import { useDispatch, useSelector } from 'react-redux'
import TableRow from './TableRow/TableRow'
import React, { useState, useEffect } from 'react'
import {
  emptyList,
  emptyObj,
  amountStringsOnPage,
  getNumFromNowPage
} from '../../../utils/constants.js'

function TableList(props) {
  const dispatch = useDispatch()
  const nowPageFromStore = useSelector( store => store.nowPage)
  const [currentList, setCurrentList] = useState([])
  const fullData = useSelector( store => store.dataFromFetch)
  const dataOnPage = useSelector( store => store.dataOnPage)
  const store = useSelector( store => store)

  const changeDataOnPage = useSelector(
    () => {
      //console.log(' --__-> ')
    }
  )

  //console.log(' B-> ', store)

  useEffect( () => {
    //console.log(' A-> ', dataOnPage)
    setCurrentList(dataOnPage)
    //setCurrentList(data => [...data, dataOnPage])
    //setInputs(inputs => [...inputs, {num: e.text}] )
  }, [dataOnPage[0]])

  useEffect( () => {
    const startCycle = (getNumFromNowPage(nowPageFromStore) * amountStringsOnPage) - amountStringsOnPage
    const endCycle = (getNumFromNowPage(nowPageFromStore) * amountStringsOnPage) - 1
    const arrForThisPage = []

    fullData.forEach( (el, i) => {
      if ((i >= startCycle) && (i <= endCycle)) {
        const cloneEmptyObj = Object.assign({}, emptyObj);
        cloneEmptyObj.id = el.id
        cloneEmptyObj.numId = el.id
        cloneEmptyObj.header = el.title
        cloneEmptyObj.description = el.body
        arrForThisPage.push(cloneEmptyObj)
      }
    })
    dispatch({ type: 'CHANGE_DATA_ON_NOW_PAGE', payload: arrForThisPage})
    setCurrentList(arrForThisPage)
  }, [fullData, nowPageFromStore])

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
