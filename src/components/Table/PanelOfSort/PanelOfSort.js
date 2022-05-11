import { useDispatch, useSelector } from 'react-redux'
import ButtonOfSort from './ButtonOfSort/ButtonOfSort'
import {
  sortIDUp,
  sortIDDown,
  sortHeadUp,
  sortHeadDown,
  sortDescrUp,
  sortDescrDown
} from '../../../utils/constants.js'
import './PanelOfSort.css'

function PanelOfSort() {
  const dispatch = useDispatch()
  const dataOnPage = useSelector( store => store.dataOnPage)
  const dataOfSort = useSelector( store => store.dataOfSort)

  function handleArrow(choise) {
    if (dataOfSort.main === 'ID') {
      dispatch({ type: 'CHANGE_SORT_ID', payload: !dataOfSort.sortID})
      if (dataOfSort.sortID) {
        dataOnPage.sort(sortIDUp)
      } else {
        dataOnPage.sort(sortIDDown)
      }
    } else if (dataOfSort.main === 'Заголовок') {
      dispatch({ type: 'CHANGE_SORT_HEADER', payload: !dataOfSort.sortHead})
      if (dataOfSort.sortHead) {
        dataOnPage.sort(sortHeadUp)
      } else {
        dataOnPage.sort(sortHeadDown)
      }
    } else if (dataOfSort.main === 'Описание') {
      dispatch({ type: 'CHANGE_SORT_DESCR', payload: !dataOfSort.sortDescr})
      if (dataOfSort.sortDescr) {
        dataOnPage.sort(sortDescrUp)
      } else {
        dataOnPage.sort(sortDescrDown)
      }
    }
    dispatch({ type: 'CHANGE_SORT_MAIN', payload: choise})
    dispatch({ type: 'CHANGE_DATA_ON_NOW_PAGE', payload: dataOnPage})
  }

  return (
    <section className="panel">
      <ButtonOfSort
        title="ID"
        arrowClass="left"
        choise={dataOfSort.main}
        forward={dataOfSort.sortID}
        onClick={handleArrow}
      />
      <ButtonOfSort
        title="Заголовок"
        arrowClass="mid"
        choise={dataOfSort.main}
        forward={dataOfSort.sortHead}
        onClick={handleArrow}
      />
      <ButtonOfSort
        title="Описание"
        arrowClass="right"
        choise={dataOfSort.main}
        forward={dataOfSort.sortDescr}
        onClick={handleArrow}
      />
    </section>
  )
}

export default PanelOfSort
