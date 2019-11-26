import React from "react";
import SectionEvents from "../section-events";
import SectionRanking from "../section-ranking";
import Partners from "../section-parter";
import { Slider } from "../slider";

export function Home() {
  return (
    <main>
      <Slider />
      <SectionEvents />
      <SectionRanking />
      <Partners />
    </main>
  );
}
