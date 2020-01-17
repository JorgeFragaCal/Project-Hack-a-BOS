import React, { useState, useEffect } from "react";
import { getEvent, participationEvent, puntuateEvent } from "../http/index";
import { useParams } from "react-router-dom";
import Interweave from "interweave";
import { useAuth } from "../shared/context/auth-context";

export function EventDetail() {
  const [eventDetail, setEventDetail] = useState([]);
  const params = useParams();
  const { userType } = useAuth();
  useEffect(() => {
    getEvent(params.id).then(eventDetail => {
      setEventDetail(eventDetail);
    });
  }, [params.id]);

  if (!eventDetail) return null;

  return (
    <main id="main-event-detail">
      {eventDetail.map(
        ({
          id,
          image,
          title,
          start_date,
          address,
          city,
          country,
          prize,
          web,
          email,
          description,
          banner
        }) => (
          <section id="event-detail" key={id}>
            <section
              id="section-banner"
              style={{
                backgroundImage: `url(${
                  image === "banner"
                    ? "https://via.placeholder.com/300"
                    : banner
                }`
              }}
            />
            <div>
              <h1>{title}</h1>
              <div className="rating">
                <input
                  type="radio"
                  onClick={() => puntuateEvent(id, 5)}
                  name="start"
                  id="start1"
                />
                <label htmlFor="start1"></label>
                <input
                  type="radio"
                  onClick={() => puntuateEvent(id, 4)}
                  name="start"
                  id="start2"
                />
                <label htmlFor="start2"></label>
                <input
                  type="radio"
                  onClick={() => puntuateEvent(id, 3)}
                  name="start"
                  id="start3"
                />
                <label htmlFor="start3"></label>
                <input
                  type="radio"
                  onClick={() => puntuateEvent(id, 2)}
                  name="start"
                  id="start4"
                />
                <label htmlFor="start4"></label>
                <input
                  type="radio"
                  onClick={() => puntuateEvent(id, 1)}
                  name="start"
                  id="start5"
                />
                <label htmlFor="start5"></label>
              </div>
              {userType === "Developer" && (
                <button
                  className="button-blue"
                  onClick={() => participationEvent(id)}
                >
                  APPLY TO THE HACKATHONE
                </button>
              )}
              <p>{start_date}</p>
              <p>{web}</p>
              <p>{email}</p>
              <p>
                {address}
                {city} {country}
              </p>
            </div>
            <div id="description">
              <Interweave content={description} id="description"></Interweave>
            </div>
          </section>
        )
      )}
    </main>
  );
}
