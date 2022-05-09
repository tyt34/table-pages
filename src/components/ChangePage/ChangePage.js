import React, { useState, useEffect, useRef } from 'react'
import { useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  getNumFromNowPage,
  maxAmountButtonsOnPage
} from '../../utils/constants.js'
import './ChangePage.css'
import ButtonForChangePageUseNumber from './ButtonForChangePageUseNumber/ButtonForChangePageUseNumber'

function ChangePage(props) {
  const [listButtonsChangePage, setListButtonsChangePage] = useState([{href: '/1', title: '1'}])
  const [prevPage, setPrevPage] = useState('')
  const [nextPage, setNextPage] = useState('')
  const nowPageFromStore = useSelector( store => store.nowPage)
  const maxPages = useSelector( store => store.maxPage)
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
  }, [maxPages, nowPageFromStore]) // тут тоже проблема с подпиской на изменения

  useEffect( () => {
    // сдесь расположена заготовка логики на случай изменения максимального количества
    // кнопок на странице, или изменения максиамального количества строк в таблице
    const a = getNumFromNowPage(nowPageFromStore)
    const b = maxPages
    const c = maxAmountButtonsOnPage
    //const cCeil = Math.ceil(c/2)
    const cFloor = Math.floor(c/2)
    //console.log(' a/b/c ', a, b, c, cCeil, cFloor)
    const arrButtons = []
    if (b > c) {
      //console.log(' - 1 -')
      if (a < c) {
        //console.log(' - 1.1 -')
        if (a <= Math.ceil(c/2)) {
          //console.log(' - 1.1.1 -')
          for (let i=1; i <= c; i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        } else {
          //console.log(' - 1.1.2 -')
          for (let i=(a-cFloor); i < (c+cFloor); i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        }
      } else {
        //console.log(' - 1.2 -')
        if (a < (b-cFloor)) {
          //console.log(' - 1.2.1 -')
          for (let i=(a-cFloor); i<(a-cFloor+c); i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        } else {
          //console.log(' - 1.2.2 -')
          for (let i=c+1; i<b+1; i++) {
            arrButtons.push({href: '/'+i, title: i})
          }
        }
      }
    } else {
      //console.log(' - 2 -')
    }

    setListButtonsChangePage(arrButtons)
  }, [nowPageFromStore, maxPages])

  function handleClickBthNum(e, href) {
    console.log(' click ', href)
    e.preventDefault()
    dispatch({ type: 'CHANGE_PAGE', payload: href})
    navigate(href)
  }

  return (
    <section className="change">
      {
        maxPages !== 1 ?
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
        maxPages !== 1 ?
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
