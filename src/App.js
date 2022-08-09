import React, { Component } from "react";
import Main from "./Components/Main/Main.js";
import Coracao from "./Components/Image/coracao.png";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
  color: violet;
  font-size: 70px;
`;
const Container = styled.div`
  background-color: black;
  font-family: sans-serif;
`;

const Photo = styled.img`
  width: 300px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default class App extends Component {
  render() {
    return (
      <Container>
        <H1>Olá! Abaixo segue umas informações sobre mim.</H1>
        <Photo src={Coracao} alt="coração" />
        <Main minhasInfos="Me chamo Débora Andrade, tenho 27 anos e estou estudando Desenvolvimento Web, FrontEnd." />
      </Container>
    );
  }
}
