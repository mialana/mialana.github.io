import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import data from "./miniMinecraft.js";

function SingleProjectPage() {
  const { theme, _ } = useContext(ThemeContext);

  const Background = styled.div`
    display: flex;
    height: 100vh;
    background: ${theme.quaternary};
    align-items: center;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
    padding: 5rem;
  `;

  const Title = styled.h1`
    margin: 0rem 0rem 1rem 0rem;
  `;

  const Body = styled.div`
    margin: 0rem 10rem 1rem 10rem;
    text-indent: 3rem;
  `;

  const Preface = styled(Body)`
    font-style: italic
  `

  return (
    <Background>
      <Title>Mini Minecraft</Title>
      <Preface>{data.preface[0]}</Preface>
      <Preface>{data.preface[1]}</Preface>
      <h2>Demo Video</h2>
    </Background>
  );
}

export default SingleProjectPage;
