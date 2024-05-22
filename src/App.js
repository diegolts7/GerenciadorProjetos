import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/layout/cabecalho/Cabecalho";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Projetos from "./components/pages/projetos/Projetos";
import Empresa from "./components/pages/empresa/Empresa";
import Contato from "./components/pages/contato/Contato";
import NewProject from "./components/pages/newProject/NewProject";

function App() {
  return (
    <div className="conteiner">
      <Router>
        <Cabecalho />
        <div className="corpo">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/new_project" element={<NewProject />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
