import React from "react";
import { Link } from "react-router-dom";

export function Event({ image, title, date_start, web, email, id }) {
  return (
    <section id="event" key={id}>
      <div
        className="image"
        style={{
          backgroundImage: `url(${"https://via.placeholder.com/300"}`
        }}
      />
      <section>
        <h3>{title}</h3>
        <p>{date_start}</p>
        <p>{web}</p>
        <p>{email}</p>
        <Link to={`/event/${id}`} id="button-event">
          CHEK IT OUT
        </Link>
      </section>
    </section>
  );
}
