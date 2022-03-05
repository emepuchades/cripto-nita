import React, { useState } from 'react'
import styled from "styled-components";
import LogoImg from '../images/cripto-logo.png';

import { FaHome, FaWallet, FaBars} from 'react-icons/fa';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    console.log('showMenu', showMenu);

  return (
    <>
        <Nav>
            <BlockLogo>
                <ImageNav src={LogoImg} alt="CriptoNita" />
                <Title>CriptoNita</Title>
            </BlockLogo>
            <Bars onClick={()=> setShowMenu(!showMenu)}/> 
            <Block id={ showMenu ? "menuBar" : "menuNav"}>
                <LinkNav href="/" activeStyle>
                    <FaHome style={{ 'color': "white" }}/>
                    <Text>Inicio</Text>
                </LinkNav>
                <LinkNav href="/info" activeStyle>
                    <FaWallet style={{ 'color': "white" }}/>
                    <Text>Ver Criptomonedas</Text>
                </LinkNav>
            </Block>
        </Nav>
    </>
  )
}

const Nav = styled.nav`
    display: flex;
    height: 60px;
    justify-content: space-between;
    background: #000;
    z-index: 10;
`;

const LinkNav = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: 15cdfc;
    }
`;
const BlockLogo = styled.div`
    display: inline-block;
    margin-left: 40px;
    width: 200px;
`;

const Text = styled.span`
    text-transform: uppercase;
    color: white;
    font-size: 15px;
    margin-left: 15px;
`;

const Title = styled.h3`
    position: relative;
    display: flex;
    float: left;
    align-items: center;
    font-size: 20px;
    height: 100%;
    color: white;
    margin-left: 18px;
`;

 const Bars = styled(FaBars) `
    display: none;
    color: #ffffff;

    @media screen and (max-width: 768px) {
        display: block;
        position: relative;
        trasnform: trasnlate(-100%, 75);
        top: 15px;
        right: 15px;
        font-size: 1.8rem;
        cursor: pointer;
    }
 `

const ImageNav = styled.img`
    display: flex;
    align-items: center;
    margin-top: 5px;
    height: 50px;
    float: left;
    width: 50px;
    z-index: auto;

`;

const Block = styled.div`

`;

export default Header