import React from "react";
import { Link } from "react-router-dom";

export function Slider() {
  return (
    <React.Fragment>
      <section id="slider">
        <h1>hackathones</h1>
        <button type="button">
          <Link to="/newevent"> Plan your hackaton</Link>
        </button>
      </section>
    </React.Fragment>
  );
}
