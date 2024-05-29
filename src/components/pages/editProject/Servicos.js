import { useState } from "react";
import styled from "styled-components";
import FormServico from "./FormServico";
import MsgProjetoCriado from "../projetos/MsgProjetoCriado";
import CardServico from "./CardServico";

const DivServico = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 4vh;
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

const ConteinerServicosCadastrados = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ConteinerAddServico = styled.div`
  padding-bottom: 4vh;
  border-bottom: 1px solid #111;
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
      <ConteinerAddServico>
        <DivAddServico>
          <h1>Adicione um serviço:</h1>
          {abrirAddServico ? (
            <button onClick={fecharServico}>Fechar</button>
          ) : (
            <button onClick={abrirServico}>Adicionar Serviço</button>
          )}
        </DivAddServico>
        {abrirAddServico && <FormServico msgAddServico={msgAddServico} />}
      </ConteinerAddServico>
      <h1>Serviços:</h1>
      <ConteinerServicosCadastrados>
        <CardServico
          prop={{
            nome: "diego",
            orcamento: 300,
            descricao: "lorem is ssssssssssssssssssssssssssssssssssssssssssss",
          }}
        />
      </ConteinerServicosCadastrados>
    </DivServico>
  );
};

export default Servicos;
