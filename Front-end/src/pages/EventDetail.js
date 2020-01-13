import React, { useState, useEffect } from "react";
import { getEvent } from "../http/eventService";
import { useParams } from "react-router-dom";
import Interweave from "interweave";
import { Link } from "react-router-dom";
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
          description
        }) => (
          <section id="event-detail" key={id}>
            <section
              id="section-slider"
              style={{
                backgroundImage: `url(${
                  image === "null" ? "https://via.placeholder.com/300" : image
                }`
              }}
            />
            <div>
              <h1>{title}</h1>
              <p>{start_date}</p>
              <p>{web}</p>
              <p>{email}</p>
              <p>
                {address}
                {city} {country}
              </p>
              {userType === "Developer" && (
                <Link to="/newEvent" className="button-white">
                  APPLY TO THE HACKATHONE
                </Link>
              )}

              <div className="rating">
                <input type="radio" name="start" id="start1" />
                <label htmlFor="start1"></label>
                <input type="radio" name="start" id="start2" />
                <label htmlFor="start2"></label>
                <input type="radio" name="start" id="start3" />
                <label htmlFor="start3"></label>
                <input type="radio" name="start" id="start4" />
                <label htmlFor="start4"></label>
                <input type="radio" name="start" id="start5" />
                <label htmlFor="start5"></label>
              </div>
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
