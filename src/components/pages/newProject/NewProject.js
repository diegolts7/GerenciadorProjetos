import { Link } from "react-router-dom";
import "./NewProject.css";

const NewProject = () => {
  return (
    <div className="divNewProject">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviçoes</p>
      <div className="form">
        <strong>Nome do Projeto:</strong>
        <input type="text" placeholder="Insira o nome do projeto" />
        <strong>Orçamento do projeto:</strong>
        <input type="Numeber" placeholder="Insira o orçamento total" />
        <strong>Selecione a categoria:</strong>
        <select>
          <option value="">Selecione uma opçao</option>
          <option value="Infra">Infra</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Planejamento">Planejamento</option>
        </select>
      </div>
      <Link to="/projetos">
        <button>Criar Projeto</button>
      </Link>
    </div>
  );
};

export default NewProject;
