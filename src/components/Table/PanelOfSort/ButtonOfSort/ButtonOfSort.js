import arrow from "../../../../images/arrow.svg"
import './ButtonOfSort.css'

function ButtonOfSort(props) {
  const {
    title,
    arrowClass,
    choise,
    forward,
    onClick
  } = props

  return (
    <section className="btn-sort">
      <button
        className="btn-sort__button"
        type="button"
        onClick={(e) => {onClick(title, forward)}}
      >
        <p className={
          choise === title ?
            (
              'btn-sort__title btn-sort__title-select'
            ) : (
              'btn-sort__title'
            )
        }>
          {title}
        </p>
        <img
          className={
            forward ?
              (
                'btn-sort__arrow btn-sort__arrow-forward btn-sort__arrow-'+arrowClass
              ) : (
                'btn-sort__arrow btn-sort__arrow-'+arrowClass
              )
          }
          alt="иконка стрелочки"
          src={arrow}
        />
      </button>
    </section>
  )
}

export default ButtonOfSort
