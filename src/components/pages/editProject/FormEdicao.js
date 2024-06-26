import { useState } from "react";
import styled from "styled-components";

const DivForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60vh;
  margin: 0 auto;
  gap: 2rem;
  button {
    padding: 10px;
    background-color: #111;
    cursor: pointer;
    border: none;
    font-weight: bold;
    transition: 0.3s;
    color: aliceblue;
    margin: 0 auto;
  }
  button:hover {
    color: grey;
  }

  @media screen and (max-width: 501px) {
    width: 100%;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 5vh;
  input,
  select {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid grey;
    background-color: inherit;
    font-size: 15px;
  }

  @media screen and (max-width: 501px) {
    margin-top: 3vh;
  }
`;

const FormEdicao = ({
  states: {
    nomeProjeto: nome,
    orcamentoTotal: orcamento,
    categoriaProjeto: categoria,
    id,
    listaServicos,
  },
  atualizarProjeto,
  methodFecharEdicao,
  MsgProjetoAtualizado,
}) => {
  const [nomeProjeto, setNomeProjeto] = useState(nome);
  const [orcamentoProjeto, setOrcamentoProjeto] = useState(orcamento);
  const [categoriaProjeto, setCategoriaProjeto] = useState(categoria);

  async function PUTrequest(id, nome, orcamento, categoria, servicos) {
    try {
      const requestBody = {
        nome: nome,
        orcamento: orcamento,
        categoria: categoria,
        servicos: servicos,
      };
      await fetch(
        `https://gerenciador-projetos-server.vercel.app/posts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );
      atualizarProjeto(nome, orcamento, categoria);
    } catch (error) {
      throw new Error("Erro ao atualizar projeto!");
    }
  }

  function concluirEdicao() {
    if (
      nomeProjeto &&
      orcamentoProjeto &&
      categoriaProjeto &&
      (nomeProjeto !== nome ||
        categoriaProjeto !== categoria ||
        orcamentoProjeto !== orcamento)
    ) {
      methodFecharEdicao();
      MsgProjetoAtualizado();
      PUTrequest(
        id,
        nomeProjeto,
        orcamentoProjeto,
        categoriaProjeto,
        listaServicos
      );
    } else {
      window.alert("Preencha todos os campos");
    }
  }

  return (
    <DivForm>
      <Form>
        <strong>Nome do Projeto:</strong>
        <input
          type="text"
          placeholder="Insira o nome do projeto"
          value={nomeProjeto}
          onChange={(e) => setNomeProjeto(e.target.value)}
        />
        <strong>Orçamento do projeto:</strong>
        <input
          type="Number"
          placeholder="Insira o orçamento total"
          value={orcamentoProjeto}
          onChange={(e) => setOrcamentoProjeto(e.target.value)}
        />
        <strong>Selecione a categoria:</strong>
        <select
          value={categoriaProjeto}
          onChange={(e) => setCategoriaProjeto(e.target.value)}
        >
          <option value="">Selecione uma opçao</option>
          <option value="Infra">Infra</option>
          <option value="Desenvolvimento">Desenvolvimento</option>
          <option value="Design">Design</option>
          <option value="Planejamento">Planejamento</option>
        </select>
      </Form>
      <button onClick={concluirEdicao}>Concluir edição</button>
    </DivForm>
  );
};

export default FormEdicao;
