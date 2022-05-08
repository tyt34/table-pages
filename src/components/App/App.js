import './App.css'
import ChangePage from '../ChangePage/ChangePage'
import Table from '../Table/Table'
import Search from '../Search/Search'
import { useSelector } from 'react-redux'
import {
} from '../../utils/constants.js'


function App() {

  return (
    <section className="app">
      <Search
      />
      <Table
      />
      <ChangePage
      />
    </section>
  )
}

export default App;
