import { useState } from "react";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 15px;
  border: 1px solid #111;
  width: 293.5px;
`;

const TituloCard = styled.strong`
  background-color: #111;
  padding: 7px;
  font-size: 20px;
  color: #daa520;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Descricao = styled.p`
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const BtnCard = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12vh;
  margin: 0 auto;
  gap: 0.3rem;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;
`;

const CardServico = ({ prop }) => {
  return (
    <DivCard>
      <TituloCard>{prop.nome}</TituloCard>
      <p>
        <strong>Custo total:</strong> R&#36; {prop.orcamento}
      </p>

      <Descricao>
        <strong>Descricao:</strong> {prop.descricao}
      </Descricao>

      <BtnCard>
        <MdDeleteOutline style={{ color: "red" }} />
        Excluir
      </BtnCard>
    </DivCard>
  );
};

export default CardServico;
