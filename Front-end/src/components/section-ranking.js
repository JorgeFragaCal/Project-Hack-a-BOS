import React from "react";
import { Ranking } from "./ranking";

function SectionRanking() {
  return (
    <React.Fragment>
      <section className="ranking-list">
        <h2>Latest Ranking</h2>
        <Ranking />
        <Ranking />
        <Ranking />
      </section>
    </React.Fragment>
  );
}

export default SectionRanking;
