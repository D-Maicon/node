import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col} from 'reactstrap';
import Menu from './components/Menu';
import Rodape from './components/Rodape';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Tendencias from './pages/Tendencias';
import Login from './pages/Login';

function App() {
  return (
    <Container fluid className=' p-0 overflow-hidden' >


    <BrowserRouter>
      <Row>
        <Col>
          {/* Aqui vai o Navbar */}
          <Menu />
        </Col>
      </Row>

      <Row>
        {/* Aqui vai o conteúdo (rotas do site) */}
        <Col>
          {/* Rotas */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tendencias" element={<Tendencias />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Col>
      </Row>
    </BrowserRouter>


      <Row>
        <Col>
          {/* Aqui vai o rodapé */}
          <Rodape className="pe" />
        </Col>
      </Row>

    </Container>
  )
}

export default App;
