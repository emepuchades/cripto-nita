import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import BASEURL from "../api/criptosStats";

const TopCripto = (criptosInfo) => {
    const [topCripto, setTopCripto] = useState();
    const crypto = criptosInfo.criptosInfo

    useEffect(() => {
      const criptoInfo = async () => {
        const info = await BASEURL.get("/coins/markets", {
          params: {
            vs_currency: "eur",
            ids: crypto.join()
          }
        })
        setTopCripto(info.data);
      }
      criptoInfo()
    });

  return (
    <BlockCripto>
      {topCripto ? 
        topCripto.map((cripto) =>
          <Cripto key={cripto.id}>
            <Image src={cripto.image} alt="CriptoNita" />
            {console.log('cripto', cripto)}
            <Block>{cripto.id}</Block>
            <Block>{cripto.price_change_percentage_24h}%</Block>
            <Block>{cripto.current_price}€ </Block>         
          </Cripto>
        )
      : null}
    </BlockCripto>
  )
}

const BlockCripto = styled.div`
  position: relative;
  display: inline-block;
`;

const Image = styled.img`
  width: 50px;
`;

const Cripto = styled.div`
  display: inline-block;
  margin: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -1px rgba(0,0,0,0.06);
`;

const Block = styled.div`
`;

export default TopCripto