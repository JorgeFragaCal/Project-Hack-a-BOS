import React, { useState, useEffect } from "react";
import { getEvent } from "../http/eventService";
import { useParams } from "react-router-dom";
import Interweave from "interweave";

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
          description
        }) => (
          <section className="events">
            <section id="event">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${
                    image === "null" ? "https://via.placeholder.com/300" : image
                  }`
                }}
              />
              <h1>{title}</h1>
              <p>{date_start}</p>
              <p>{web}</p>
              <p>{email}</p>
              <p>{address}</p>
              <p>{city}</p>
              <p>{country}</p>
              <p>{prize}</p>
              <Interweave content={description}></Interweave>
              <section className="description"></section>
            </section>
          </section>
        )
      )}
    </React.Fragment>
  );
}
