import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { underConstructionData } from "../../data/underConstructionData";
import "./UnderConstruction.css";

function UnderConstruction() {
  const { theme, _ } = useContext(ThemeContext);

  

  return (
    <div className="landing" style={{ backgroundColor: theme.quaternary }}>
        <p>{underConstructionData.message}</p>
    </div>
  );
}

export default UnderConstruction;
