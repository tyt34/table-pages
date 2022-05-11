import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchText } from '../../utils/constants.js'
import ico from "../../images/search.svg"
import './Search.css'

function Search(props) {
  const [inputText, setInputText] = React.useState('')
  const fullData = useSelector( store => store.dataFromFetch)
  const nowPageFromStore = useSelector( store => store.nowPage)
  const inputSearch = useSelector( store => store.inputSearch)
  const dispatch = useDispatch()

  function handleInputText(e) {
    setInputText(e.target.value)
    if (e.target.value) {
      dispatch({ type: 'CHANGE_DATA_FROM_FILTER', payload: searchText(e.target.value, fullData)})
      dispatch({ type: 'CHANGE_INPUT_SEARCH', payload: e.target.value})
    } else {
      dispatch({ type: 'CHANGE_DATA_FROM_FILTER', payload: []})
      dispatch({ type: 'CHANGE_INPUT_SEARCH', payload: ''})
    }
  }

  useEffect( () => {
    // это нужно для:
    // допусти вы написали в поисковике "а ". Вы получили 10 страниц. Перешли на 10.
    // потом вы дописываете "a", то есть в строке поиска будет: "a a". Тогда будет максимум 2 странице
    // считаю, что в этом случае нужен переход на максимально возможную страницу.
    // данная функция в этом сценарии не будет сбрасывать введенные данные в строку поиска
    setInputText(inputSearch)
  }, [nowPageFromStore])

  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        value={inputText}
        placeholder={"Поиск"}
        onChange={handleInputText}
      >
      </input>

      <img
        className="search__ico"
        alt="иконка увеличительного стекла"
        src={ico}
      />

    </section>
  )
}

export default Search
