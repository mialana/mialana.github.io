import React, { useContext } from "react";
import styled from "styled-components";
import YouTube from 'react-youtube';

import { ThemeContext } from "../../contexts/ThemeContext";
import { underConstructionData } from "../../data/underConstructionData";

import SneakPeek from "../../assets/mp4/sneak-peek.mp4";

function UnderConstruction() {
  const { theme, _ } = useContext(ThemeContext);

  const Background = styled.div`
    display: flex;
    height: 80vh;
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
    margin-bottom: 2rem;
  `;

  const opts = {
    playerVars: {
      autoplay: 1,
      playlist: '2NhI1Orwa90',
      loop: 1,
      controls: 1,
    },
  }

  return (
    <Background>
      <Message>{underConstructionData.message}</Message>
      <YouTube videoId="2NhI1Orwa90" opts={opts} loading="Loading..." />
    </Background>
  );
}

export default UnderConstruction;
