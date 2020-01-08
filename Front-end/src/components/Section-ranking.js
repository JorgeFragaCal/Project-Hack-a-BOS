import React, { useState, useEffect } from "react";
import { getRanking } from "../http/rankingService";
import { Link } from "react-router-dom";
import aos from "aos";
function SectionRanking() {
  const [rankings, setRankings] = useState([]);
  aos.init();
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
          <section
            className="ranking"
            id="ranking-home"
            key={title}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="false"
          >
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
        ))
        .slice(0, 3)}
    </section>
  );
}

export default SectionRanking;
