import './TableRow.css'

function TableRow(props) {
  const {
    numId,
    header,
    description
  } = props

  return (
    <tr className="row">

      <th className="row__th">
        <p className="row__text">
          {numId}
        </p>
      </th>

      <th className="row__th">
        <p className="row__text">
          {header}
        </p>
      </th>

      <th className="row__th">
        <p className="row__text">
          {description}
        </p>
      </th>

    </tr>
  )
}

export default TableRow
