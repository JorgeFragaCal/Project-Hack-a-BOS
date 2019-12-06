import React from "react";
import SectionEvents from "../section-events";
import SectionRanking from "../section-ranking";
import Partners from "../section-parter";
import { Slider } from "../slider";

export function Home() {
  return (
    <React.Fragment>
      <Slider />
      <main id="main-home">
        <SectionEvents />
        <SectionRanking />
        <Partners />
      </main>
    </React.Fragment>
  );
}
