import styled from "styled-components";
import Links from "./Links";

let DivCabecalho = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 10vh;
  background-color: #292929;
  color: aliceblue;
`;

function Cabecalho() {
  return (
    <DivCabecalho>
      <p>OIIII</p>
      <Links />
    </DivCabecalho>
  );
}

export default Cabecalho;
