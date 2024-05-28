import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import FormEdicao from "./FormEdicao";
import MsgProjetoCriado from "../projetos/MsgProjetoCriado";

const DivEdicaoProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 10vh;
  border-bottom: 1px solid #111;
  padding-bottom: 5vh;
`;

const DivNomeProjeto = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding: 10px;
    font-size: 35px;
    color: #daa520;
    background-color: #111;
  }
  button {
    padding: 10px;
    background-color: #111;
    border: none;
    color: aliceblue;
    font-weight: bold;
    cursor: pointer;
  }
  button:hover {
    color: grey;
    transition: 0.3s;
  }
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  gap: 0.8rem;
`;

const EdicaoProjeto = ({ projeto }) => {
  const [edicaoProjetoAtiva, setEdicaoProjetoAtiva] = useState(false);
  const [flashMessageEdicao, setFlashMessageEdicao] = useState(false);

  function abrirEdicao() {
    setEdicaoProjetoAtiva(true);
  }
  function fecharEdicao() {
    setEdicaoProjetoAtiva(false);
  }

  function MsgProjetoAtualizado() {
    setFlashMessageEdicao(true);
    setTimeout(() => {
      setFlashMessageEdicao(false);
    }, 2000);
  }

  return (
    <DivEdicaoProject>
      {flashMessageEdicao && (
        <MsgProjetoCriado mensagem="Projeto atualizado!" />
      )}
      <DivNomeProjeto>
        <h1>{projeto.nome}</h1>
        {edicaoProjetoAtiva ? (
          <button onClick={fecharEdicao}>Fechar</button>
        ) : (
          <button onClick={abrirEdicao}>Editar Projeto</button>
        )}
      </DivNomeProjeto>
      {edicaoProjetoAtiva ? (
        <FormEdicao
          projeto={projeto}
          methodFecharEdicao={fecharEdicao}
          MsgProjetoAtualizado={MsgProjetoAtualizado}
        />
      ) : (
        <Infos>
          <p>
            <strong>Categoria:</strong> {projeto.categoria}
          </p>
          <p>
            <strong>Total do orçamento:</strong> R&#36; {projeto.orcamento}
          </p>
          <p>
            <strong>Total utilizado:</strong> R&#36; 0
          </p>
        </Infos>
      )}
    </DivEdicaoProject>
  );
};

export default EdicaoProjeto;
