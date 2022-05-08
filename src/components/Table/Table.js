import './Table.css'
//import ButtonOfSort from './ButtonOfSort/ButtonOfSort'
import PanelOfSort from './PanelOfSort/PanelOfSort'
import TableList from './TableList/TableList'


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
