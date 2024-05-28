import { useState } from "react";
import styled from "styled-components";

const DivForm = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70vh;
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

const FormServico = ({ msgAddServico }) => {
  const [nomeServico, setNomeServico] = useState("");
  const [custoServico, setcustoServico] = useState("");
  const [descricaoServico, setdescricaoServico] = useState("");

  async function addServico() {
    msgAddServico();
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
      <button onClick={addServico}>Finalizar Servico</button>
    </DivForm>
  );
};

export default FormServico;
