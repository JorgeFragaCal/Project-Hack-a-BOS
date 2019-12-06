import React, { useState, useEffect } from "react";
import { getEvents } from "../http/get-events";
import { Link } from "react-router-dom";

function SectionEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
    });
  }, []);
  return (
    <section id="list-events-home">
      <h2>Events</h2>
      {events.map(
        ({ id, title, start_date, city, image, email, prize, web }) => (
          <section className="event" key={id}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${
                  image === "N/A" ? "https://via.placeholder.com/300" : image
                }`
              }}
            />
            <section id="event-medium-description">
              <h2>{title}</h2>
              <p>{start_date}</p>
              <p>City: {city}</p>
              <p href={web}>{web}</p>
              <p>
                <i className="fa fa-globe fa-fw"> </i>
                {web}
              </p>
              <p>
                <i className="fa fa-envelope"> </i>
                {email}
              </p>
              <p>Prize: {prize} €</p>
              <Link to={`/event/${id}`} id="button-event">
                CHEK IT OUT
              </Link>
            </section>
          </section>
        )
      )}
    </section>
  );
}

export default SectionEvents;
