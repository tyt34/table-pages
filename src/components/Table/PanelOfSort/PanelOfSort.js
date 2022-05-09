import './PanelOfSort.css'
import { useDispatch, useSelector } from 'react-redux'
import ButtonOfSort from './ButtonOfSort/ButtonOfSort'
import React, { useState, useEffect } from 'react'
import {
  sortIDUp,
  sortIDDown,
  sortHeadUp,
  sortHeadDown,
  sortDescrUp,
  sortDescrDown
} from '../../../utils/constants.js'

function PanelOfSort(props) {
  const dispatch = useDispatch()
  const [choise, setChoise] = useState('ID')
  const [idForward, setIdForward] = useState(true)
  const [headerForward, setHeaderForward] = useState(false)
  const [descrForward, setDescrForward] = useState(false)
  const dataOnPage = useSelector( store => store.dataOnPage)

  function handleArrow(choise, forward) {
    setChoise(choise)
    let arrSort = dataOnPage
    if (choise === 'ID') {
      setIdForward(!idForward)
      if (idForward) {
        arrSort.sort(sortIDUp)
      } else {
        arrSort.sort(sortIDDown)
      }
    } else if (choise === 'Заголовок') {
      setHeaderForward(!headerForward)
      if (headerForward) {
        arrSort.sort(sortHeadUp)
      } else {
        arrSort.sort(sortHeadDown)
      }
    } else if (choise === 'Описание') {
      setDescrForward(!descrForward)
      if (descrForward) {
        arrSort.sort(sortDescrUp)
      } else {
        arrSort.sort(sortDescrDown)
      }
    }
    dispatch({ type: 'CHANGE_DATA_ON_NOW_PAGE', payload: arrSort})
  }

  return (
    <section className="panel">
      <ButtonOfSort
        title="ID"
        arrowClass="left"
        choise={choise}
        forward={idForward}
        onClick={handleArrow}
      />
      <ButtonOfSort
        title="Заголовок"
        arrowClass="mid"
        choise={choise}
        forward={headerForward}
        onClick={handleArrow}
      />
      <ButtonOfSort
        title="Описание"
        arrowClass="right"
        choise={choise}
        forward={descrForward}
        onClick={handleArrow}
      />
    </section>
  )
}

export default PanelOfSort
