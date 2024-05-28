import styled from "styled-components";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Rodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 12vh;
  background-color: #292929;
  color: aliceblue;
  gap: 1rem;

  strong {
    color: #daa520;
    font-size: 18px;
  }
`;

const Icones = styled.div`
  display: flex;
  font-size: 20px;
  gap: 0.6rem;

  a {
    color: aliceblue;
    cursor: pointer;
  }
`;

function Footer() {
  return (
    <Rodape>
      <strong>Costs &copy; 2024</strong>
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
