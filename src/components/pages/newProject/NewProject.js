import { useNavigate } from "react-router-dom";
import "./NewProject.css";
import { useState } from "react";

const NewProject = () => {
  const [nomeProjeto, setNomeProjeto] = useState();
  const [orcamentoProjeto, setOrcamentoProjeto] = useState();
  const [categoriaProjeto, setCategoriaProjeto] = useState();
  const navigate = useNavigate();

  function pegarDados() {
    console.log(orcamentoProjeto, nomeProjeto, categoriaProjeto);
  }

  function redirect() {
    navigate("/projetos", { state: true });
  }

  return (
    <div className="divNewProject">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviçoes</p>
      <div className="form">
        <strong>Nome do Projeto:</strong>
        <input
          type="text"
          placeholder="Insira o nome do projeto"
          onChange={(e) => setNomeProjeto(e.target.value)}
        />
        <strong>Orçamento do projeto:</strong>
        <input
          type="Numeber"
          placeholder="Insira o orçamento total"
          onChange={(e) => setOrcamentoProjeto(e.target.value)}
        />
        <strong>Selecione a categoria:</strong>
        <select onChange={(e) => setCategoriaProjeto(e.target.value)}>
          <option value="">Selecione uma opçao</option>
          <option value="Infra">Infra</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Planejamento">Planejamento</option>
        </select>
      </div>
      <button onClick={redirect}>Criar Projeto</button>
    </div>
  );
};

export default NewProject;
