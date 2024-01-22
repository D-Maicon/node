import './App.css';
import { HiHome } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa"
import { MdWork, MdContactPhone } from "react-icons/md"
import { BrowserRouter, Link, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Servicos from './components/pages/Servicos';
import Contato from './components/pages/Contato';

function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li><Link to="/"><HiHome />Home</Link></li>
          <li><Link to="/sobre"><FaUserTie />Sobre</Link></li>
          <li><Link to="/servicos"><MdWork />Serviços</Link></li>
          <li><Link to="/contato"><MdContactPhone />Contatos</Link></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <p className="pe">Aqui vai o rodapé</p>


    </div>
  )
}

export default App;
