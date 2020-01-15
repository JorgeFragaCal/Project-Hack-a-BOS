import React, { useState, useEffect } from "react";
import { getUserOrganizateEvents, deleteEvent } from "../http/eventService";
import { useAuth } from "../shared/context/auth-context";

export function SectionUserEvents() {
  const { user } = useAuth();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getUserOrganizateEvents(user.userData.id).then(events => {
      setEvents(events);
    });
  }, [user]);

  return (
    <section id="list-events-profile">
      <h2>Events Created</h2>
      {events
        .map(({ id, title, image }, i) => (
          <section className="event" key={i}>
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
              <div id="buttons">
                <button className="button-edit-event">
                  <i className="fas fa-edit "></i>
                </button>
                <button
                  className="button-delete-event"
                  onClick={() => {
                    deleteEvent(id).then(() => {
                      setEvents(events.filter(e => e.id !== id));
                    });
                  }}
                >
                  <i className="fas fa-trash"></i>
                </button>
              </div>
            </section>
          </section>
        ))
        .slice(0, 4)}
    </section>
  );
}
