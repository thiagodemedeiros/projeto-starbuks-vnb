import Header from './assets/components/Header/Header.jsx'
import SelecionarCopo from './assets/components/SelecionarCopo/SelecionarCopo.jsx'
import './App.sass'
import Novidades from './assets/components/Novidades/Novidades.jsx'
import Sobre from './assets/components/Sobre/Sobre.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <body>
      <Router>
        <Header/>
        <Routes>
          {/* <Route path='/' element={<SelecionarCopo/>}/>
          <Route path='/Novidades' element={<Novidades/>}/>
          <Route path='/Sobre' element={<Sobre/>}/> */}
        </Routes>
      </Router>
    </body>
  )
}

export default App