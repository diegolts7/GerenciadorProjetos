import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnCriarProjeto = styled.button`
  padding: 10px;
  background-color: #111;
  cursor: pointer;
  border: none;
  font-weight: bold;
  transition: 0.3s;
  color: aliceblue;

  &:hover {
    color: grey;
  }
`;

const BtnProjeto = () => {
  return (
    <Link to="/new_project">
      <BtnCriarProjeto>Criar projeto</BtnCriarProjeto>
    </Link>
  );
};

export default BtnProjeto;
