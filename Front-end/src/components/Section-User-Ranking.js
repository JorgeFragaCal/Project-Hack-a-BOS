import React, { useState, useEffect } from "react";
import { getUserRanking } from "../http/rankingService";
import { useParams } from "react-router-dom";

function SectionUserRanking() {
  const [rankings, setRankings] = useState([]);
  const params = useParams();
  useEffect(() => {
    getUserRanking(params.id).then(rankings => {
      setRankings(rankings);
    });
  }, [params.id]);
  return (
    <section id="section-user-ranking">
      <h2>My Events</h2>
      {rankings
        .map(({ title, username, puntuation }) => (
          <section id="ranking-user" className="ranking" key={title}>
            <i className="fa fa-trophy fa-3x" />
            <h3>{title}</h3>
            <ul>
              <li>
                {username} {puntuation}
              </li>
            </ul>
          </section>
        ))
        .slice(0, 3)}
    </section>
  );
}

export default SectionUserRanking;