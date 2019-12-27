import React, { useRef } from "react";

export function Slider({ onSearchChange, data_final }) {
  const input = useRef();

  return (
    <React.Fragment>
      <label>Fecha</label>
      <input
        ref={input}
        type="range"
        min="01012019"
        max="30122020"
        className="slider"
        onChange={data_final}
      />
    </React.Fragment>
  );
}
