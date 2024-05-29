import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import EdicaoProjeto from "./EdicaoProjeto";
import Servicos from "./Servicos";

const DivEditProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  //border: 1px solid black;
`;

const EditProject = () => {
  const { id } = useParams();
  const [listaServicos, setListaServicos] = useState([]);
  const [nomeProjeto, setNomeProjeto] = useState();
  const [categoriaProjeto, setCategoriaProjeto] = useState();
  const [orcamentoTotal, setOrcamentoTotal] = useState();
  const [totalUtilizado, setTotalUtilizado] = useState(0);

  async function GetProjeto() {
    let data = await fetch(`http://localhost:4000/posts/${id}`);
    let dados = await data.json();
    setNomeProjeto(dados.nome);
    setCategoriaProjeto(dados.categoria);
    setOrcamentoTotal(dados.orcamento);
    setListaServicos(dados.servicos);
    let cont = 0;
    dados.servicos.forEach((servico) => {
      cont += Number(servico.orcamento);
    });
    setTotalUtilizado(cont);
  }

  function atualizarProjeto(nome, orcamento, categoria) {
    setNomeProjeto(nome);
    setOrcamentoTotal(orcamento);
    setCategoriaProjeto(categoria);
  }

  useEffect(() => {
    GetProjeto();
  }, []);

  return (
    <DivEditProject>
      <EdicaoProjeto
        states={{
          listaServicos,
          nomeProjeto,
          categoriaProjeto,
          orcamentoTotal,
          totalUtilizado,
          id,
        }}
        atualizarProjeto={atualizarProjeto}
      />
      <Servicos
        states={{
          listaServicos,
          setListaServicos,
          nomeProjeto,
          categoriaProjeto,
          orcamentoTotal,
          totalUtilizado,
          setTotalUtilizado,
        }}
        id={id}
      />
    </DivEditProject>
  );
};

export default EditProject;
