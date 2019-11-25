import React from "react";
import SectionEvents from "../section-events";
import SectionRanking from "../section-ranking";
import Partners from "../section-parter";

export function Home() {
  return (
    <React.Fragment>
      <SectionEvents />
      <SectionRanking />
      <Partners />
    </React.Fragment>
  );
}
