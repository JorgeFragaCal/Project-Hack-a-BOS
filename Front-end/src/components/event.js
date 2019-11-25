import React from "react";

export function Event({ image, title, date_start, web, email }) {
  return (
    <section id="event">
      <div>{image}</div>
      <h3>{title}</h3>
      <p>{date_start}</p>
      <p>{web}</p>
      <p>{email}</p>
      <a id="button-event" href="">
        CHEK IT OUT
      </a>
    </section>
  );
}
