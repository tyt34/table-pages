import './PanelOfSort.css'
import ButtonOfSort from '../ButtonOfSort/ButtonOfSort'

function PanelOfSort(props) {

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
