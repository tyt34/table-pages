import './PanelOfSort.css'
import ButtonOfSort from './ButtonOfSort/ButtonOfSort'
import React, { useState, useEffect } from 'react'

function PanelOfSort(props) {
  const [choise, setChoise] = useState('rateUp')

  return (
    <section className="panel">
      <ButtonOfSort
        title="ID"
        arrowClass="left"
      />
      <ButtonOfSort
        title="Заголовок"
        arrowClass="mid"
      />
      <ButtonOfSort
        title="Описание"
        arrowClass="right"
      />
    </section>
  )
}

export default PanelOfSort
