import React from "react";
import { Event } from "./event";

function SectionEvents() {
  return (
    <React.Fragment>
      <section id="events">
        <h2>Events</h2>
        <Event />
        <Event />
        <Event />
        <Event />
      </section>
    </React.Fragment>
  );
}

export default SectionEvents;
