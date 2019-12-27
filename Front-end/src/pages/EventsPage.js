import React, { useState, useEffect } from "react";
import { getEvents } from "../http/get-events";
import { Selector } from "../components/Selector";
import { Search } from "../components/Search";
import { Slider } from "../components/Slider-form";

export function EventsPage() {
  const [events, setEvents] = useState([]);
  const [city, setCity] = useState("");
  const [skill, setSkill] = useState("");
  const [data_final, setDate] = useState("");

  useEffect(() => {
    getEvents(city).then(events => {
      setEvents(events);
    });
  }, [city]);

  return (
    <main id="main-page-of-events">
      <span />
      <section className="aside">
        <p>{city}</p>
        <Search text={city} onSearchChange={text => setCity(text)} />
        <Selector type={skill} onSkillChange={e => setSkill(e)} />
        <Slider type={data_final} onSliderChange={e => setDate(e)} />
      </section>

      <section className=" list-of-events-event-page">
        {events.map(
          ({ id, title, start_date, city, image, email, prize, web }) => (
            <section className="event-on-event-page" key={id}>
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
              </section>
            </section>
          )
        )}
      </section>
    </main>
  );
}
