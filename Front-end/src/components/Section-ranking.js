import React, { useState, useEffect } from "react";
import { getRanking } from "../http/rankingService";
import { Link } from "react-router-dom";
import { getEvents } from "../http/eventService";
import { useAuth } from "../shared/context/auth-context";
import aos from "aos";
function SectionRanking() {
  const [rankings, setRankings] = useState([]);
  const [events, setEvents] = useState([]);
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
    });
  }, []);
  useEffect(() => {
    getRanking().then(rankings => {
      setRankings(rankings);
    });
  }, []);
  aos.init();
  return (
    <section id="ranking-list-home">
      <h2>Latest Ranking</h2>
      {events
        .map(({ title, id }) => (
          <section
            className="ranking"
            id="ranking-home"
            key={id}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
            <i className="fa fa-trophy fa-3x" />
            <h3>{title}</h3>
            <ul>
              {rankings
                .filter(({ events_idevents }) => events_idevents === id)
                .map(
                  ({
                    username,
                    puntuation,
                    user_iduser,
                    avatar,
                    anonymous
                  }) => (
                    <li key={username}>
                      <div
                        className="image-profile-small"
                        style={{
                          backgroundImage: `url(${
                            anonymous === "true"
                              ? "https://pwcenter.org/sites/default/files/default_images/default_profile.png"
                              : avatar
                          }`
                        }}
                      />
                      <div>
                        <Link
                          to={
                            isAuthenticated && anonymous === "false"
                              ? `/user/${user_iduser}`
                              : anonymous === "true"
                              ? "/#"
                              : !isAuthenticated
                              ? "/login"
                              : null
                          }
                        >
                          {anonymous === "false" ? username : "anonymous"}{" "}
                          {puntuation}
                        </Link>
                      </div>
                    </li>
                  )
                )}
            </ul>
          </section>
        ))
        .slice(0, 3)}
    </section>
  );
}

export default SectionRanking;
