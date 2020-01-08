import React, { useState, useEffect } from "react";
import { getRanking } from "../http/rankingService";
import { Link } from "react-router-dom";
export function RankingPage() {
  const [rankings, setRankings] = useState([]);
  useEffect(() => {
    getRanking().then(rankings => {
      setRankings(rankings);
    });
  }, []);
  return (
    <main id="main-ranking-page">
      <h1> ALL THE RANKINGS</h1>
      <section id="list-page-of-rankings">
        {rankings.map(({ title }) => (
          <section className="ranking" id="ranking-home" key={title}>
            <i className="fa fa-trophy fa-3x" />
            <h3>{title}</h3>
            <ul>
              {rankings.map(({ username, puntuation, user_iduser, avatar }) => (
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
                    <Link to={`/user/${user_iduser}`}>
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
