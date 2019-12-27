import React, { useState, useEffect } from "react";
import { getEvent } from "../http/get-event";
import { useParams } from "react-router-dom";

export function EventDetail() {
  const [eventDetail, setEventDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    getEvent(params.id).then(eventDetail => {
      setEventDetail(eventDetail);
    });
  }, [params.id]);

  if (!eventDetail) return null;

  return (
    <React.Fragment>
      <h2>Prueba</h2>
      {eventDetail.map(
        ({
          image,
          title,
          date_start,
          address,
          city,
          country,
          prize,
          web,
          email,
          desciption
        }) => (
          <section className="events">
            <h2>Events</h2>
            <section id="event">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    image === "N/A" ? "https://via.placeholder.com/1000" : image
                  }`
                }}
              />
              <h3>{title}</h3>
              <p>{date_start}</p>
              <p>{web}</p>
              <p>{email}</p>
              <p>{address}</p>
              <p>{city}</p>
              <p>{country}</p>
              <p>{prize}</p>
              <section className="description">{desciption}</section>
            </section>
          </section>
        )
      )}
    </React.Fragment>
  );
}
