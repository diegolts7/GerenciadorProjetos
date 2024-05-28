import { useState } from "react";
import styled from "styled-components";
import FormServico from "./FormServico";
import MsgProjetoCriado from "../projetos/MsgProjetoCriado";

const DivServico = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid #111;
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

const DivAddServico = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
const Servicos = () => {
  const [abrirConteinerServico, setAbrirConteinerServico] = useState(false);
  const [abrirAddServico, setAbrirAddServico] = useState(false);
  const [flashMessageAddServico, setFlashMessageAddServico] = useState(false);

  function abrirServico() {
    setAbrirAddServico(true);
  }
  function fecharServico() {
    setAbrirAddServico(false);
  }
  function msgAddServico() {
    fecharServico();
    setFlashMessageAddServico(true);
    setTimeout(() => {
      setFlashMessageAddServico(false);
    }, 2000);
  }
  return (
    <DivServico>
      {flashMessageAddServico && (
        <MsgProjetoCriado mensagem="Serviço adicionado!" />
      )}
      <DivAddServico>
        <h1>Adicione um serviço:</h1>
        {abrirAddServico ? (
          <button onClick={fecharServico}>Fechar</button>
        ) : (
          <button onClick={abrirServico}>Adicionar Serviço</button>
        )}
      </DivAddServico>
      {abrirAddServico && <FormServico msgAddServico={msgAddServico} />}
    </DivServico>
  );
};

export default Servicos;
