import React from "react";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  border: 1px solid #000;
  margin: 2%;
`
const Link = styled.a`
  text-decoration: none;
`
const TituloH2 = styled.h2`
  font-size: 5vh;
`
const Item = styled.p`
  font-size: 3vh;
`

const MenuBox = (props) => {
  return(
    <Container>
      <TituloH2>{props.Titulo}</TituloH2>
      <Item><Link href="#">{props.Painel1}</Link></Item>
      <Item><Link href="#">{props.Painel2}</Link></Item>
      <Item><Link href="#">{props.Painel3}</Link></Item>
      <Item><Link href="#">{props.Painel4}</Link></Item>
    </Container>
  )
}

export default MenuBox;