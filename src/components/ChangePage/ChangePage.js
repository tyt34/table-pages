import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import ButtonForChangePageUseNumber from './ButtonForChangePageUseNumber/ButtonForChangePageUseNumber'
import { getNumFromNowPage, maxAmountButtonsOnPage } from '../../utils/constants.js'
import './ChangePage.css'

function ChangePage(props) {
  const [listButtonsChangePage, setListButtonsChangePage] = useState([{href: '/1', title: '1'}])
  const [prevPage, setPrevPage] = useState('')
  const [nextPage, setNextPage] = useState('')
  const nowPageFromStore = useSelector( store => store.nowPage)
  const maxPages = useSelector( store => store.maxPage)
  const inputSearch = useSelector( store => store.inputSearch)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let someValidPath = ''

  useEffect( () => {
    if (getNumFromNowPage(nowPageFromStore) === 1) { // если текущая страница является первой
      setPrevPage('/'+maxPages)
      setNextPage('/'+(getNumFromNowPage(nowPageFromStore)+1))
    } else if (getNumFromNowPage(nowPageFromStore) === maxPages) { // если текущая страница является последней
      setPrevPage('/'+(getNumFromNowPage(nowPageFromStore)-1))
      setNextPage('/'+1)
    } else { // если текущая страница НЕ первая и НЕ последняя
      setPrevPage('/'+(getNumFromNowPage(nowPageFromStore)-1))
      setNextPage('/'+(getNumFromNowPage(nowPageFromStore)+1))
    }
  }, [maxPages, nowPageFromStore])

  useEffect( () => {
    // это нужно для:
    // допусти вы написали в поисковике "а ". Вы получили 10 страниц. Перешли на 10.
    // потом вы дописываете "a", то есть в строке поиска будет: "a a". Тогда будет максимум 2 странице
    // считаю, что в этом случае нужен переход на максимально возможную страницу.
    let nowUrl = window.location.href.split('/')[window.location.href.split('/').length - 1]
    if (nowUrl > maxPages) {
      if (maxPages === 0) {
        dispatch({ type: 'CHANGE_PAGE', payload: '/1'})
        navigate('/1')
      } else {
        dispatch({ type: 'CHANGE_PAGE', payload: '/'+maxPages})
        navigate('/'+maxPages)
      }

    } else if (maxPages < Number(nowPageFromStore.split('/')[1])) {
      dispatch({ type: 'CHANGE_PAGE', payload: '/'+maxPages})
      navigate('/'+maxPages)
    }
  }, [inputSearch, maxPages])

  useEffect( () => {
    // сдесь расположена заготовка логики на случай изменения максимального количества
    // кнопок на странице, или изменения максиамального количества строк в таблице
    const a = getNumFromNowPage(nowPageFromStore)
    const b = maxPages
    const c = maxAmountButtonsOnPage
    const cFloor = Math.floor(c/2)
    const arrButtons = []
    if (b > c) {
      if (a < c) {
        if (a <= Math.ceil(c/2)) {
          for (let i=1; i <= c; i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        } else {
          for (let i=(a-cFloor); i < (a-cFloor+c); i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        }
      } else {
        if (a <= (b-cFloor)) {
          for (let i=(a-cFloor); i<(a-cFloor+c); i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        } else {
          for (let i=(b-c+1); i<b+1; i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        }
      }
    } else {
      for (let i=1; i<b+1; i++) {
        arrButtons.push({href: '/'+i, title: i})
      }
    }
    setListButtonsChangePage(arrButtons)
  }, [nowPageFromStore, maxPages])

  function handleClickBthNum(e, href) {
    e.preventDefault()
    dispatch({ type: 'CHANGE_PAGE', payload: href})
    navigate(href)
  }

  return (
    <section className="change">
      {
        maxPages > 1 ?
          (
            <a
              className="change__link-direction"
              href={prevPage}
              onClick={(e) => {handleClickBthNum(e, prevPage)}}
            >
              Назад
            </a>
          ) : (
            <a
              className="change__link-direction"
              href={someValidPath}
            >

            </a>
          )
      }

      <section className="change__nums">
        {
          listButtonsChangePage.map( (button) =>
            (
              <ButtonForChangePageUseNumber
                key={button.title}
                href={button.href}
                title={button.title}
                onClick={(e) => {handleClickBthNum(e, button.href)}}
              />
            )
          )
        }
      </section>

      {
        maxPages > 1 ?
          (
            <a
              className="change__link-direction"
              href={nextPage}
              onClick={(e) => {handleClickBthNum(e, nextPage)}}
            >
              Далее
            </a>
          ) : (
            <a
              className="change__link-direction"
              href={someValidPath}
            >

            </a>
          )
      }
    </section>
  )
}

export default ChangePage
