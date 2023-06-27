import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sessao from "./module/pages/sessao/Sessao";
import Home from "./module/pages/home/Home";
import CriacaoTeste from "./module/pages/criacao/CriacaoTeste";
import Header from "./module/components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessao" element={<Sessao />} />
          <Route path="/criarTeste" element={<CriacaoTeste />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
