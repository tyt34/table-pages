import './ButtonOfSort.css'
import arrow from "../../../images/arrow.svg"

function ButtonOfSort(props) {
  const {
    title,
    arrowClass
  } = props

  function handleArrow() {
    console.log(' click')
  }

  return (
    <section className="btn-sort">
      <button
        className="btn-sort__button"
        type="button"
        onClick={handleArrow}
      >
        <p className="btn-sort__title">
          {title}
        </p>
        <img
          className={'btn-sort__arrow btn-sort__arrow-'+arrowClass}
          alt="иконка стрелочки"
          src={arrow}
        />
      </button>
    </section>
  )
}

export default ButtonOfSort
