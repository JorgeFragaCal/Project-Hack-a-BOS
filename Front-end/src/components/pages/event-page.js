import React from "react";

export function EventPage({
  image,
  title,
  date_start,
  web,
  email,
  description
}) {
  return (
    <React.Fragment>
      <section className="events">
        <h2>Events</h2>
        <section id="event">
          <div>{image}</div>
          <h3>{title}</h3>
          <p>{date_start}</p>
          <p>{web}</p>
          <p>{email}</p>
          <section className="description">{description}</section>
        </section>
      </section>
    </React.Fragment>
  );
}
