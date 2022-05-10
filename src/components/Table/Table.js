import PanelOfSort from './PanelOfSort/PanelOfSort'
import TableList from './TableList/TableList'
import './Table.css'

function Table(props) {

  return (
    <section className="table">
      <PanelOfSort
      />
      <TableList
      />
    </section>
  )
}

export default Table
