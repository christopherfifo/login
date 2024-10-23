
//! importação das pages
import './App.css'
import Teste from './components/teste.jsx'
import List from './components/List.jsx'

//& importação de icones
import {FaHeart} from 'react-icons/fa'

function App() {
  

  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <Teste/>
        <List/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more<FaHeart/>
      </p>
    </>
  )
}

export default App
