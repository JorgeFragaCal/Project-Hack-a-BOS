import React, { useState, useEffect } from "react";
import { getEvents } from "../http/eventService";
import { Link } from "react-router-dom";
import aos from "aos";

function SectionEvents() {
  const [events, setEvents] = useState([]);
  aos.init();
  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
    });
  }, []);
  return (
    <section id="list-events-home">
      <h2>New Events</h2>
      {events
        .map(
          ({
            id,
            title,
            start_date,
            city,
            image,
            email,
            prize,
            web,
            country,
            address
          }) => (
            <section
              className="event"
              key={id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    image === "null" ? "https://via.placeholder.com/300" : image
                  }`
                }}
              />
              <section id="event-medium-description">
                <h3>{title}</h3>
                <p>{start_date}</p>
                <p>
                  {address}
                  {city} {country}
                </p>
                <p href={web}>{web}</p>
                <p>
                  <i className="fa fa-globe fa-fw"> </i>
                  {web}
                </p>
                <p>
                  <i className="fa fa-envelope fa-fw"> </i>
                  {email}
                </p>
                <p id="prize">Prize: {prize} €</p>
                <Link to={`/event/${id}`} className="button-blue">
                  CHEK IT OUT
                </Link>
              </section>
            </section>
          )
        )
        .slice(0, 4)}
    </section>
  );
}

export default SectionEvents;
