import React from "react";
import { useAuth } from "../shared/context/auth-context";
import { Link } from "react-router-dom";
import aos from "aos";

export function Slider() {
  const { userType } = useAuth();

  aos.init();
  return (
    <section id="section-slider">
      <section
        id="slider"
        data-aos="fade"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        <h1>hackathones</h1>

        <Link
          to={userType === "Organizating" ? "/newEvent" : "/login"}
          className="button-white"
        >
          PLAN YOUR HACKATHONE
        </Link>
      </section>
    </section>
  );
}
