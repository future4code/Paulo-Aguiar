import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
`;

const NomeContainer = styled.p`
  margin-right: 20px;
`;

const IdadeContainer = styled.p`
  color: orange;
`;

function CardPessoa(props) {
  return (
    <CardContainer>
      <NomeContainer>{props.nomeProps}</NomeContainer>
      <IdadeContainer>{props.idadeProps}</IdadeContainer>
    </CardContainer>
  );
}

export default CardPessoa;
