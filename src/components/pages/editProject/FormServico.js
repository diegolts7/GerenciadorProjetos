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
  input {
    padding: 15px;
    border-radius: 10px;
    border: 1px solid grey;
    background-color: inherit;
    font-size: 15px;
  }
`;

const FormServico = ({
  msgAddServico,
  msgErroAddServico,
  states: {
    listaServicos,
    setListaServicos,
    nomeProjeto,
    categoriaProjeto,
    orcamentoTotal,
    totalUtilizado,
    setTotalUtilizado,
    id,
  },
}) => {
  const [nomeServico, setNomeServico] = useState("");
  const [custoServico, setcustoServico] = useState("");
  const [descricaoServico, setdescricaoServico] = useState("");

  async function PUTServico() {
    if (
      nomeServico &&
      custoServico &&
      Number(custoServico) + totalUtilizado <= Number(orcamentoTotal) &&
      descricaoServico
    ) {
      let todosServiços = [...listaServicos];
      todosServiços.push({
        nome: nomeServico,
        orcamento: custoServico,
        descricao: descricaoServico,
      });
      setListaServicos(todosServiços);
      let anterTotalUtilizado = totalUtilizado;
      setTotalUtilizado((anterTotalUtilizado += Number(custoServico)));

      await fetch(
        `https://gerenciador-projetos-server.vercel.app/posts/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: nomeProjeto,
            categoria: categoriaProjeto,
            orcamento: orcamentoTotal,
            servicos: todosServiços,
          }),
        }
      );
      msgAddServico();
    } else {
      msgErroAddServico();
    }
  }

  return (
    <DivForm>
      <Form>
        <strong>Nome do Serviço:</strong>
        <input
          type="text"
          placeholder="Insira o nome"
          onChange={(e) => setNomeServico(e.target.value)}
        />
        <strong>Custo do Serviço:</strong>
        <input
          type="Number"
          placeholder="Insira o custo total"
          onChange={(e) => setcustoServico(e.target.value)}
        />
        <strong>Descricao do Servico:</strong>
        <input
          type="text"
          placeholder="Insira a descrição"
          onChange={(e) => setdescricaoServico(e.target.value)}
        />
      </Form>
      <button onClick={PUTServico}>Finalizar Servico</button>
    </DivForm>
  );
};

export default FormServico;
