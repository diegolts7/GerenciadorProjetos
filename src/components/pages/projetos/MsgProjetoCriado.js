import React from "react";
import styled from "styled-components";

const DivMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cfffca;
  height: 7vh;
`;

const MsgProjetoCriado = ({ mensagem }) => {
  return <DivMsg>{mensagem}</DivMsg>;
};

export default MsgProjetoCriado;
