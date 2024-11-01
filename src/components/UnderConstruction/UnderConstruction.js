import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { underConstructionData } from "../../data/underConstructionData";

import SneakPeek from "../../assets/mp4/sneak-peek.mp4";

function UnderConstruction() {
  const { theme, _ } = useContext(ThemeContext);

  const Background = styled.div`
    display: flex;
    height: 100vh;
    background: ${theme.quaternary};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: "Poppins", sans-serif;
  `;

  const Message = styled.p`
    width: 60vw;
    text-align: center;
    color: ${theme.tertiary};
  `;

  return (
    <Background>
      <Message>{underConstructionData.message}</Message>
      <video width="720" height="480" controls autoplay="true">
        <source src={SneakPeek} type="video/mp4" />
      </video>
    </Background>
  );
}

export default UnderConstruction;
