import React from 'react'
import './Search.css'
import ico from "../../images/search.svg"

function Search(props) {
  const [inputText, setInputText] = React.useState('')

  function handleInputText(e) {
    setInputText(e.target.value)
  }

  function handleButton() {
    console.log(' click')
  }

  return (
    <section className="search">
      <input
        className="search__input"
        type="text"
        value={inputText}
        placeholder={'Поиск'}
        onChange={handleInputText}
      >
      </input>

      <button
        className="search__button"
        type="button"
        onClick={handleButton}
      >
        <img
          className="search__ico"
          alt="иконка увеличительного стекла"
          src={ico}
        />
      </button>

    </section>
  )
}

export default Search
