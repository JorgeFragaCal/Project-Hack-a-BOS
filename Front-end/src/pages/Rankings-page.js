import React, { useState, useEffect } from "react";
import { getRanking } from "../http/get-ranking";
export function RankingPage() {
  const [rankings, setRankings] = useState([]);
  useEffect(() => {
    getRanking().then(rankings => {
      setRankings(rankings);
    });
  }, []);
  return (
    <main id="main-page-of-rankings">
      {rankings.map(({ title }) => (
        <section className="ranking-on-ranking-page" key={title}>
          <i className="fa fa-trophy fa-3x" />
          <h3>{title}</h3>
          <ul>
            {rankings.map(({ username, puntuation }) => (
              <li key={username}>
                {username}
                {puntuation}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
