import './ButtonForChangePageUseNumber.css'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNumFromNowPage,
} from '../../../utils/constants.js'
function ButtonForChangePageUseNumber(props) {
  const {
    href,
    title,
    onClick
  } = props
  const nowPageFromStore = useSelector( store => store.nowPage)

  //console.log(' bth: ', title === getNumFromNowPage(nowPageFromStore))

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
