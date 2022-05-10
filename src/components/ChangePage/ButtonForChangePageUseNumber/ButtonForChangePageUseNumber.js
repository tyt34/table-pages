import {  useSelector } from 'react-redux'
import { getNumFromNowPage } from '../../../utils/constants.js'
import './ButtonForChangePageUseNumber.css'

function ButtonForChangePageUseNumber(props) {
  const {
    href,
    title,
    onClick
  } = props
  const nowPageFromStore = useSelector( store => store.nowPage)

  return (
      <a
        className={
          title === getNumFromNowPage(nowPageFromStore) ?
            (
              'button-num button-num__select'
            ) : (
              'button-num'
            )
        }
        href={href}
        onClick={onClick}
      >
        {title}
      </a>
  )
}

export default ButtonForChangePageUseNumber
