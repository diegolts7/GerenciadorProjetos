import styled from "styled-components";
import BtnProjeto from "../home/BtnProjeto";
import MsgProjetoCriado from "./MsgProjetoCriado";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CardProjeto from "./CardProjeto";

const DivProjetos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  gap: 2rem;
  //border: 1px solid black;
`;

const HeaderProjetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

const ConteinerProjetos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

function Projetos() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <DivProjetos>
      <HeaderProjetos>
        <h1>Meus Projetos</h1>
        <BtnProjeto />
      </HeaderProjetos>
      {location.state && <MsgProjetoCriado />}
      <ConteinerProjetos>
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
        <CardProjeto />
      </ConteinerProjetos>
    </DivProjetos>
  );
}

export default Projetos;
