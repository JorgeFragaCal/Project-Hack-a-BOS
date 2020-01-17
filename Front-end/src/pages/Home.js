import React from "react";
import SectionEvents from "../components/Section-events";
import SectionRanking from "../components/Section-ranking";
import Partners from "../components/Section-parter";
import { Slider } from "../components/Slider";
import img from "../img/whatis.jpg";
import { useAuth } from "../shared/context/auth-context";
export function Home() {
  const { isAuthenticated } = useAuth();
  return (
    <React.Fragment>
      <Slider />
      <main id="main-home">
        {!isAuthenticated && (
          <div
            id="explication"
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2>WHAT IS A HACKATHONE ?</h2>
            <div id="whatis">
              <img
                src={img}
                className="image"
                id="img-whatis"
                alt="hackathon"
              />
              <p>
                Hackathone is a coding marathon, an event lasting from few hours
                to few days, usually hosted on weekends. Despite the possible
                negative connotation with the word “hacking”, those events do
                not promote malicious or criminal behaviors, as “hacking” can
                also mean “playful, exploratory programming”. A challenge like
                that brings together specialists from related fields, like
                graphic designers, project managers, business analysts and
                others. It originated from events for programmers, but the
                formula quickly proved to be attractive to specialists from
                other fields as well, more on that later. The goal of such event
                differs depending on what the organizers aim for. Generally
                speaking, however, the main rule is to find a solution to a
                presented problem by means of teams competing to produce and
                present the best project that meets the predefined criteria.
                Authors of winning projects are awarded in cash, prizes or via
                other means, as well as a combination of any of those. You will
                need some inspiration for the theme of your hackathon, so the
                next section is just for you.
              </p>
            </div>
          </div>
        )}
        <SectionEvents />
        <SectionRanking />
        <Partners />
      </main>
    </React.Fragment>
  );
}
