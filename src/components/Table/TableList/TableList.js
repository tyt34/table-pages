import './TableList.css'

function TableList(props) {

  return (
    <table className="list">
      <tr className="list__col">
        <th className="list__row">
          <p className="list__text">
            Ячейка 1
          </p>
        </th>
        <th className="list__row">
          <p className="list__text">
            Ячейка 2
          </p>
        </th>
        <th className="list__row">
          <p className="list__text">
            Ячейка 3
          </p>
        </th>
      </tr>

      <tr className="list__col">
        <td className="list__row">
          <p className="list__text">
            Ячейка 4
          </p>
        </td>
        <td className="list__row">
          <p className="list__text">
            Ячейка 5
          </p>
        </td>
        <td className="list__row">
          <p className="list__text">
            Ячейка 6
          </p>
        </td>
      </tr>

      <tr className="list__col">
        <td className="list__row">
          <p className="list__text">
            Ячейка 7
          </p>
        </td>
        <td className="list__row">
          <p className="list__text">
            Ячейка 8
          </p>
        </td>
        <td className="list__row">
          <p className="list__text">
            Ячейка 9
          </p>
        </td>
      </tr>
    </table>
  )
}

export default TableList
