import styled from "styled-components";
import Links from "./Links";
import image from "../../../img/costs_logo.png";

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
      <img src={image} height="45px" />
      <Links />
    </DivCabecalho>
  );
}

export default Cabecalho;
