import React from "react";
import styled from "styled-components";
import { FaCircle } from "react-icons/fa6";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

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
`;

const TipoCard = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 15px;
`;

const BtnsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  button {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
  }
`;

const CardProjeto = () => {
  const navigate = useNavigate();

  return (
    <DivCard>
      <TituloCard>Nome do projeto</TituloCard>
      <p>
        <strong>Orçamento:</strong> R$000
      </p>
      <TipoCard>
        <FaCircle style={{ color: "blue" }} />
        <p>Desenvolvimento</p>
      </TipoCard>
      <BtnsCard>
        <button onClick={() => navigate(`/edit_project/${uuidv4()}`)}>
          <MdEdit style={{ color: "darkblue" }} /> Editar
        </button>
        <button>
          <MdDeleteOutline style={{ color: "red" }} /> Excluir
        </button>
      </BtnsCard>
    </DivCard>
  );
};

export default CardProjeto;
