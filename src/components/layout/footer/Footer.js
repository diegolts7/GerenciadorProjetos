import styled from "styled-components";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Rodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 6vh;
  background-color: #292929;
  color: aliceblue;
  gap: 2rem;
`;

const Icones = styled.div`
  display: flex;
  font-size: 20px;
  gap: 0.5rem;

  a {
    color: aliceblue;
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <Rodape>
      <p>Costs@ 2024</p>
      <Icones>
        <a target="_blank" href="https://www.google.com.br/?hl=pt-BR">
          <FaInstagram />
        </a>
        <a>
          <FaTwitter />
        </a>
        <a>
          <FaLinkedin />
        </a>
        <a>
          <FaGithub />
        </a>
      </Icones>
    </Rodape>
  );
}

export default Footer;
