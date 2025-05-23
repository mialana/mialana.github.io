import React, { useState, useContext } from "react";

import Fade from "react-reveal/Fade";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import enlarge from "../../assets/svg/artwork/enlarge.svg";

import { ThemeContext } from "../../contexts/ThemeContext";

import "./Artwork.css";

function SingleArtwork({ art }) {
  const { theme } = useContext(ThemeContext);

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  return (
    <Fade bottom>
      <div className="art--body" style={{ backgroundColor: theme.quaternary }}>
        <img
          className="enlarge--button"
          onClick={() => setOpen((o) => !o)}
          src={enlarge}
          alt=""
          style={{
            filter:
              theme.secondary !== "#1b263e"
                ? "invert(13%) sepia(53%) saturate(506%) hue-rotate(180deg) brightness(96%) contrast(98%)"
                : "invert(100%) sepia(96%) saturate(579%) hue-rotate(179deg) brightness(101%) contrast(99%)",
          }}
        />
        <div className="art--content">
          {String(art).includes(".mp4") ? (
            <video width="100%" controls autoplay="true" muted loop>
              <source src={art} type="video/mp4" />
              Loading...
            </video>
          ) : (
            <img src={art} alt="" />
          )}
        </div>
        <div>
          <Popup open={open} onClose={closeModal}>
            <div className="modal--window">
              <button onClick={() => setOpen(false)} className="close--button">
                &times;
              </button>
              {String(art).includes(".mp4") ? (
                <video className="modal--image" controls autoplay="true" muted loop>
                  <source className="modal--image" src={art} type="video/mp4" />
                  Loading...
                </video>
              ) : (
                <img className="modal--image" src={art} alt="" />
              )}
            </div>
          </Popup>
        </div>
      </div>
    </Fade>
  );
}

export default SingleArtwork;
