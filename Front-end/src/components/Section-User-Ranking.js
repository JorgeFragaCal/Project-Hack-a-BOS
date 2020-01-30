import React, { useState, useEffect } from "react";
import { getUserRanking } from "../http/rankingService";

function SectionUserRanking({ userId }) {
  const [rankings, setRankings] = useState([]);
  useEffect(() => {
    getUserRanking(userId).then(rankings => {
      setRankings(rankings);
    });
  }, [userId]);
  return (
    <section id="section-user-ranking">
      <h2>My Rankings</h2>
      {rankings.map(({ title, username, puntuation }) => (
        <section id="ranking-user" className="ranking" key={title}>
          <i className="fa fa-trophy fa-3x" />
          <h3>{title}</h3>
          <ul>
            <li>
              {username} {puntuation}
            </li>
          </ul>
        </section>
      ))}
    </section>
  );
}

export default SectionUserRanking;
