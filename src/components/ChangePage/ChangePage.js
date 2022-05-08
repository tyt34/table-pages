import './ChangePage.css'

function ChangePage(props) {
  let someValidPath = ''

  return (
    <section className="change">
      <a
        className="change__link-direction"
        href={someValidPath}
      >
        Назад
      </a>
      <section className="change__nums">
        <a
          className="change__link"
          href={someValidPath}
        >
          1
        </a>
        <a
          className="change__link"
          href={someValidPath}
        >
          2
        </a>
        <a
          className="change__link"
          href={someValidPath}
        >
          3
        </a>
        <a
          className="change__link"
          href={someValidPath}
        >
          4
        </a>
        <a
          className="change__link"
          href={someValidPath}
        >
          5
        </a>
      </section>
      <a
        className="change__link-direction"
        href={someValidPath}
      >
        Далее
      </a>
    </section>
  )
}

export default ChangePage
