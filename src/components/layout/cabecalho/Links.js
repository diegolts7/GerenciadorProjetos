import styled from "styled-components";
import { Link } from "react-router-dom";

const DivLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  a {
    color: aliceblue;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      color: grey;
      transition: 0.3s;
    }
  }
`;

function Links() {
  return (
    <DivLinks>
      <Link to="/">Home</Link>
      <Link to="/projetos">Projetos</Link>
      <Link to="/empresa">Empresa</Link>
      <Link to="/contato">Contato</Link>
    </DivLinks>
  );
}

export default Links;
