import React, { useState, useEffect } from "react";
import { getRanking } from "../http/rankingService";
import { getEvents } from "../http/eventService";
import { getSkills } from "../http/rankingService";
import { Link } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
export function RankingPage() {
  const [rankings, setRankings] = useState([]);
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    getRanking().then(rankings => {
      setRankings(rankings);
    });
  }, []);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents().then(events => {
      setEvents(events);
    });
  }, []);
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    getSkills().then(skills => {
      setSkills(skills);
    });
  }, []);
  return (
    <main id="main-ranking-page">
      <h1> ALL THE RANKINGS</h1>
      <section id="list-page-of-rankings">
        <h2>EVENTS</h2>
        {events.map(({ id, title }) => (
          <section className="ranking" id="ranking-home" key={id}>
            <i className="fa fa-trophy fa-3x" />
            <h3>{title}</h3>
            <ul>
              {rankings
                .filter(({ events_idevents }) => events_idevents === id)
                .map(({ username, puntuation, user_iduser, avatar }) => (
                  <li key={username}>
                    <div
                      className="image-profile-small"
                      style={{
                        backgroundImage: `url(${
                          avatar === "N/A"
                            ? "https://via.placeholder.com/1000"
                            : avatar
                        }`
                      }}
                    />
                    <div>
                      <Link
                        to={isAuthenticated ? `/user/${user_iduser}` : "/login"}
                      >
                        {username} {puntuation}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
        <h2>SKILLS</h2>
        {skills.map(({ skills }) => (
          <section className="ranking" id="ranking-home" key={skills}>
            <i className="fa fa-trophy fa-3x" />
            <h3>{skills}</h3>
            <ul>
              {rankings
                .filter(rankings => rankings.skills === skills)
                .map(({ username, puntuation, user_iduser, avatar }) => (
                  <li key={username}>
                    <div
                      className="image-profile-small"
                      style={{
                        backgroundImage: `url(${
                          avatar === "N/A"
                            ? "https://via.placeholder.com/1000"
                            : avatar
                        }`
                      }}
                    />
                    <div>
                      <Link
                        to={isAuthenticated ? `/user/${user_iduser}` : "/login"}
                      >
                        {username} {puntuation}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </section>
        ))}
      </section>
    </main>
  );
}
