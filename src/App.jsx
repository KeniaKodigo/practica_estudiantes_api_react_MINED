import './assets/css/Global.css'
import './assets/css/Navbar.css'
import './assets/css/ListaEstudiantes.css'
import './assets/css/Registro.css'
import ListaEstudiantes from "./components/ListaEstudiantes"
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <ListaEstudiantes />
    </>
  )
}

export default App
