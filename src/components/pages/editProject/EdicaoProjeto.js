import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

const DivEdicaoProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 10vh;
`;

const DivNomeProjeto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding: 10px;
    font-size: 45px;
    color: #daa520;
    background-color: #111;
  }
  button {
    padding: 10px;
    background-color: #111;
    border: none;
    color: aliceblue;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
  }
  button:hover {
    color: grey;
    transition: 0.3s;
  }
`;

const EdicaoProjeto = ({ projeto }) => {
  function abrirEdicao() {
    setEdicaoProjetoAtiva(true);
  }
  function fecharEdicao() {
    setEdicaoProjetoAtiva(false);
  }
  const [edicaoProjetoAtiva, setEdicaoProjetoAtiva] = useState(false);
  return (
    <DivEdicaoProject>
      <DivNomeProjeto>
        <h1>{projeto.nome}</h1>
        {edicaoProjetoAtiva ? (
          <button onClick={fecharEdicao}>Fechar</button>
        ) : (
          <button onClick={abrirEdicao}>Editar Projeto</button>
        )}
      </DivNomeProjeto>
    </DivEdicaoProject>
  );
};

export default EdicaoProjeto;
