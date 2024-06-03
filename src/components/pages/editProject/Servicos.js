import { useState } from "react";
import styled from "styled-components";
import FormServico from "./FormServico";
import MsgProjetoCriado from "../projetos/MsgProjetoCriado";
import MsgProjetoExcluido from "../projetos/MsgProjetoExcluido";
import CardServico from "./CardServico";
import { v4 as uuidv4 } from "uuid";

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
  gap: 1rem;
`;

const ConteinerAddServico = styled.div`
  padding-bottom: 4vh;
  border-bottom: 1px solid #111;
`;

const Servicos = ({
  states: {
    listaServicos,
    setListaServicos,
    nomeProjeto,
    categoriaProjeto,
    orcamentoTotal,
    totalUtilizado,
    setTotalUtilizado,
  },
  id,
}) => {
  const [abrirConteinerServico, setAbrirConteinerServico] = useState(false);
  const [abrirAddServico, setAbrirAddServico] = useState(false);
  const [flashMessageAddServico, setFlashMessageAddServico] = useState(false);
  const [flashMessageErroAddServico, setFlashMessageErroAddServico] =
    useState(false);

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
  function msgErroAddServico() {
    setFlashMessageErroAddServico(true);
    setTimeout(() => {
      setFlashMessageErroAddServico(false);
    }, 2000);
  }
  return (
    <DivServico>
      {flashMessageAddServico && (
        <MsgProjetoCriado mensagem="Serviço adicionado!" />
      )}
      {flashMessageErroAddServico && (
        <MsgProjetoExcluido mensagem="Erro ao adicionar serviço" />
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
        {abrirAddServico && (
          <FormServico
            msgAddServico={msgAddServico}
            msgErroAddServico={msgErroAddServico}
            states={{
              listaServicos,
              setListaServicos,
              nomeProjeto,
              categoriaProjeto,
              orcamentoTotal,
              totalUtilizado,
              setTotalUtilizado,
              id,
            }}
          />
        )}
      </ConteinerAddServico>
      <h1>Serviços:</h1>
      <ConteinerServicosCadastrados>
        {listaServicos.length > 0 ? (
          listaServicos.map((servico) => (
            <CardServico
              key={uuidv4()}
              prop={{
                nome: servico.nome,
                orcamento: servico.orcamento,
                descricao: servico.descricao,
              }}
              states={{
                listaServicos,
                setListaServicos,
                setTotalUtilizado,
                nomeProjeto,
                categoriaProjeto,
                orcamentoTotal,
                id,
              }}
            />
          ))
        ) : (
          <p>Sem serviços cadastrados.</p>
        )}
      </ConteinerServicosCadastrados>
    </DivServico>
  );
};

export default Servicos;
