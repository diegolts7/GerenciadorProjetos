import React from "react";
import styled from "styled-components";

const DivMsgExcluida = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c44d4d;
  color: aliceblue;
  height: 7vh;
`;

const MsgProjetoExcluido = ({ mensagem }) => {
  return <DivMsgExcluida>{mensagem}</DivMsgExcluida>;
};

export default MsgProjetoExcluido;
