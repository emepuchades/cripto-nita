import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import TopCripto from '../components/TopCripto';

const Home = () => {
  const criptos= ["bitcoin", "ethereum", "cardano"]

  return (
    <Header>
      <BlockLeft>
        <Title>Analiza los precios de las criptomonedas</Title>
        <Button>Ver todas</Button>
        <TopCripto criptosInfo={criptos} />
      </BlockLeft>
    </Header>
  )
}

const Header = styled.div`  
  background-color: #f3f3f3;
  height: 500px;
  padding-top: 150px;
  text-align: center;
`;
const BlockLeft = styled.div`
  font-size: 30px;
`;
const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`;
const Button = styled.div`
  position relative;
  text-align: center;
`;

export default Home