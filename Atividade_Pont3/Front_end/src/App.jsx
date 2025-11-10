import Header from './componentes/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Index';
import Servicos from './pages/Servicos';
import SobreNos from './pages/SobreNos';
import FaleConosco from './pages/FaleConosco';
import { useState } from 'react';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Servicos />} />
              <Route path="/sobre-nos" element={<SobreNos />} />
              <Route path="/fale-conosco" element={<FaleConosco />} />
            </Routes>
          </main>
        </Router>
      </div>

      <footer>
        <img src={logo} alt="Logo Drogaria Popular" />
      </footer>
    </>
  );
}

export default App;
