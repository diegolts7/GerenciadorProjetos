import styled from "styled-components";
import BtnProjeto from "../home/BtnProjeto";
import MsgProjetoCriado from "./MsgProjetoCriado";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import CardProjeto from "./CardProjeto";
import MsgProjetoExcluido from "./MsgProjetoExcluido";
import Loading from "../../../img/loading.svg";

const DivProjetos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  gap: 2rem;
  //border: 1px solid black;
`;

const HeaderProjetos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5vh;
`;

const ConteinerProjetos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const DivInfos = styled.div`
  margin: 0 auto;
`;

function Projetos() {
  const location = useLocation();
  const navigate = useNavigate();
  const [listaProjetos, setListaProjetos] = useState([]);
  const [flashMessageRemove, setflashMessageRemove] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function lerProjetos() {
    try {
      let data = await fetch(
        "https://gerenciador-projetos-server.vercel.app/posts"
      );
      let dados = await data.json();
      setIsLoading(false);
      setListaProjetos(dados);
    } catch (error) {
      console.log(error);
    }
  }

  function removerProjeto(id) {
    setListaProjetos(listaProjetos.filter((projeto) => projeto.id !== id));

    setflashMessageRemove(true);

    setTimeout(() => {
      setflashMessageRemove(false);
    }, 2000);

    //clearTimeout(timer);
  }

  useEffect(() => {
    lerProjetos();

    if (location.state) {
      const timer = setTimeout(() => {
        navigate(location.pathname, { replace: true });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <DivProjetos>
      <HeaderProjetos>
        <h1>Meus Projetos</h1>
        <BtnProjeto />
      </HeaderProjetos>
      {location.state && (
        <MsgProjetoCriado mensagem="Projeto criado com sucesso!" />
      )}
      {flashMessageRemove && (
        <MsgProjetoExcluido mensagem="Projeto excluido com sucesso!" />
      )}
      <ConteinerProjetos>
        {listaProjetos.length > 0 ? (
          listaProjetos.map((projeto) => (
            <CardProjeto
              key={projeto.id}
              prop={projeto}
              deletar={removerProjeto}
            />
          ))
        ) : (
          <>
            {isLoading ? (
              <DivInfos>
                <img src={Loading} width="50px" />
              </DivInfos>
            ) : (
              <DivInfos>
                <p>Sem projetos cadastrados</p>
              </DivInfos>
            )}
          </>
        )}
      </ConteinerProjetos>
    </DivProjetos>
  );
}

export default Projetos;
