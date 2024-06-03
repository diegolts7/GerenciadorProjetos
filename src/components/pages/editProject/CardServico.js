import { useState } from "react";
import styled from "styled-components";
import { MdDeleteOutline } from "react-icons/md";

const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 15px;
  border: 1px solid #111;
  width: 293.5px;
`;

const TituloCard = styled.strong`
  background-color: #111;
  padding: 7px;
  font-size: 20px;
  color: #daa520;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const Descricao = styled.p`
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

const BtnCard = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12vh;
  margin: 0 auto;
  gap: 0.3rem;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  margin-top: auto;
`;

const CardServico = ({
  prop,
  states: {
    listaServicos,
    setListaServicos,
    setTotalUtilizado,
    nomeProjeto,
    categoriaProjeto,
    orcamentoTotal,
    id,
  },
}) => {
  async function deletaServico() {
    try {
      const objetoServico = { ...prop };
      const listService = [...listaServicos];

      listService.forEach((element, indice) => {
        if (
          element.descricao === objetoServico.descricao &&
          element.nome === objetoServico.nome &&
          element.orcamento === objetoServico.orcamento
        ) {
          listService.splice(indice, 1);
          setListaServicos(listService);
          setTotalUtilizado(
            (prev) => Number(prev) - Number(objetoServico.orcamento)
          );
        }
      });

      await fetch(`http://localhost:4000/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nomeProjeto,
          categoria: categoriaProjeto,
          orcamento: orcamentoTotal,
          servicos: listService,
        }),
      });
    } catch (error) {
      throw new Error("Erro ao deletar serviço!");
    }
  }
  return (
    <DivCard>
      <TituloCard>{prop.nome}</TituloCard>
      <p>
        <strong>Custo total:</strong> R&#36; {prop.orcamento}
      </p>

      <Descricao>
        <strong>Descricao:</strong> {prop.descricao}
      </Descricao>

      <BtnCard onClick={deletaServico}>
        <MdDeleteOutline style={{ color: "red" }} />
        Excluir
      </BtnCard>
    </DivCard>
  );
};

export default CardServico;
