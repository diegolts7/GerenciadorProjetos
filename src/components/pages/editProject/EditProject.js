import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import EdicaoProjeto from "./EdicaoProjeto";

const DivEditProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  gap: 2rem;
  //border: 1px solid black;
`;

const EditProject = () => {
  const location = useLocation();
  const dados = location.state;
  return (
    <DivEditProject>
      <EdicaoProjeto projeto={dados} />
    </DivEditProject>
  );
};

export default EditProject;
