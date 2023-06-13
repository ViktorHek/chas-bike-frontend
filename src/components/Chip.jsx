import "../styles/components.css";
import { useState } from "react";

function Chip({ text, handleClick }) {
  const [active, setActive] = useState(false);

  function clickChip() {
    setActive(!active);
    return handleClick(text);
  }

  return (
    <div
      className={`${active ? "main-chip-container-active" : "main-chip-container-not-active"}`}
      onClick={() => clickChip()}>
      <span>{text}</span>
    </div>
  );
}

export default Chip;
