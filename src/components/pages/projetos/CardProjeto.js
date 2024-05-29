import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaCircle } from "react-icons/fa6";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
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

const CardProjeto = ({ prop, deletar }) => {
  const navigate = useNavigate();

  async function excluirProjeto() {
    try {
      await fetch(`http://localhost:4000/posts/${prop.id}`, {
        method: "DELETE",
      });
      deletar(prop.id);
    } catch (error) {
      console.log(error);
    }
  }

  function colorTipo() {
    if (prop.categoria === "Infra") {
      return "#964B00";
    }
    if (prop.categoria === "Desenvolvimento") {
      return "darkblue";
    }
    if (prop.categoria === "Design") {
      return "green";
    }
    if (prop.categoria === "Planejamento") {
      return "yellow";
    }
  }

  return (
    <DivCard>
      <TituloCard>{prop.nome}</TituloCard>
      <p>
        <strong>Orçamento:</strong> R&#36; {prop.orcamento}
      </p>
      <TipoCard>
        <FaCircle style={{ color: colorTipo() }} />
        <p>{prop.categoria}</p>
      </TipoCard>
      <BtnsCard>
        <button
          onClick={() => {
            navigate(`/edit_project/${prop.id}`, {
              state: prop,
            });
          }}
        >
          <MdEdit style={{ color: "darkblue" }} /> Editar
        </button>
        <button onClick={excluirProjeto}>
          <MdDeleteOutline style={{ color: "red" }} /> Excluir
        </button>
      </BtnsCard>
    </DivCard>
  );
};

export default CardProjeto;

/**/
