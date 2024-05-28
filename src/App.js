import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cabecalho from "./components/layout/cabecalho/Cabecalho";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/pages/home/Home";
import Projetos from "./components/pages/projetos/Projetos";
import Empresa from "./components/pages/empresa/Empresa";
import Contato from "./components/pages/contato/Contato";
import NewProject from "./components/pages/newProject/NewProject";
import EditProject from "./components/pages/editProject/EditProject";

function App() {
  return (
    <Router>
      <Cabecalho />
      <div className="corpo">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/empresa" element={<Empresa />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/new_project" element={<NewProject />} />
          <Route path="/edit_project/:id" element={<EditProject />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
