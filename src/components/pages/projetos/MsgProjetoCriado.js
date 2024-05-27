import React from "react";
import styled from "styled-components";

const DivMsg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #cfffca;
  height: 7vh;
`;

const MsgProjetoCriado = () => {
  return <DivMsg>Projeto criado com sucesso!</DivMsg>;
};

export default MsgProjetoCriado;
