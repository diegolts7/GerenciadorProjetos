import styled from "styled-components";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

const Rodape = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 14vh;
  background-color: #292929;
  color: aliceblue;
  gap: 1rem;

  strong {
    color: #daa520;
    font-size: 20px;
  }

  @media screen and (max-width: 501px) {
    height: 12vh;
    strong {
      font-size: 18px;
    }
  }
`;

const Icones = styled.div`
  display: flex;
  font-size: 25px;
  gap: 1.5rem;

  a {
    color: aliceblue;
    cursor: pointer;
  }

  @media screen and (max-width: 501px) {
    font-size: 22px;
    gap: 1rem;
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
