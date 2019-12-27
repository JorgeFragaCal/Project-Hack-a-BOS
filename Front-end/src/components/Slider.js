import React from "react";
import { Link } from "react-router-dom";

export function Slider() {
  return (
    <section id="section-slider">
      <section id="slider">
        <h1>hackathones</h1>
        <button type="button" className="button-orange">
          <Link to="/newEvent"> Plan your hackaton</Link>
        </button>
      </section>
    </section>
  );
}
