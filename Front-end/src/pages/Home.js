import React from "react";
import SectionEvents from "../components/Section-events";
import SectionRanking from "../components/Section-ranking";
import Partners from "../components/Section-parter";
import { Slider } from "../components/Slider";

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
