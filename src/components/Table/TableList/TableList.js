import './TableList.css'
import { useSelector } from 'react-redux'
import TableRow from './TableRow/TableRow'
import React, { useState, useEffect } from 'react'
import {
  emptyList,
  emptyObj,
  amountStringsOnPage,
  getNumFromNowPage
} from '../../../utils/constants.js'

function TableList(props) {
  const nowPageFromStore = useSelector( store => store.nowPage)
  //console.log(' tl: ', nowPageFromStore)
  const [currentList, setCurrentList] = useState([])
  const fullData = useSelector( store => store.dataFromFetch)

  useEffect( () => {
    setCurrentList(emptyList)
  }, [])
  /*
  function getNumFromNowPage(input) {
    return Number(input.split('/')[1])
  }
  */

  useEffect( () => {
    //console.log(' CHANGE PAGE')
  }, [nowPageFromStore])

  useEffect( () => {
    //console.log(getNumFromNowPage(nowPageFromStore))
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
