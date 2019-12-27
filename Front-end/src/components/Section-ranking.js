import React, { useState, useEffect } from "react";
import { getRanking } from "../http/get-ranking";
import { Link } from "react-router-dom";

function SectionRanking() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    getRanking().then(rankings => {
      setRankings(rankings);
    });
  }, []);
  return (
    <section id="ranking-list-home">
      <h2>Latest Ranking</h2>
      {rankings
        .map(({ title }) => (
          <section className="ranking-on-ranking-page" key={title}>
            <i className="fa fa-trophy fa-3x" />
            <h3>{title}</h3>
            <ul>
              {rankings.map(({ username, puntuation, user_iduser }) => (
                <li key={username}>
                  <Link to={`/user/${user_iduser}`}>{username}</Link>
                  {puntuation}
                </li>
              ))}
            </ul>
          </section>
        ))
        .slice(0, 3)}
    </section>
  );
}

export default SectionRanking;
