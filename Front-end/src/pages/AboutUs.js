import React from "react";
import "../css/about.css";
import img1 from "../img/partners/hablogo.png";
import zara from "../img/partners/zara.png";
import softtek from "../img/partners/softtek.png";
import oesia from "../img/partners/oesia.png";
import improvingmetrics from "../img/partners/improvingmetrics.png";
import altia from "../img/partners/altia.png";
export function AboutUs() {
  return (
    <React.Fragment>
      <section id="about">
        <section id="Company">
          <h2>Company</h2>
          <p>
            When HAB provided us with the project, we took it as a challenge.
            From then, Our mission is to organize the world’s hackathons and
            make them universally accessible and useful. We included a platform
            that is the standard for assessing developer skills for over 2,000+
            companies around the world.
          </p>
          <figure>
            <img src={img1} alt="Fotografía de hackathones" />
            <br />
          </figure>
          <p>
            Hackathones was founded by three junior programmers in A Coruña. Our
            intention is to create a technological community in the province and
            to expand to the whole country, and why not, to the whole world. By
            enabling tech recruiters and hiring managers to objectively evaluate
            talent at every stage of the recruiting process, Hackathone helps
            companies hire skilled developers and innovate faster.
          </p>
          <p>
            Our mission is to organize the world’s hackathons and make them
            universally accessible and useful.
          </p>
          <p>
            Hackathones is a technology hiring platform that is the standard for
            assessing developer skills for over 2,000+ companies around the
            world. By enabling tech recruiters and hiring managers to
            objectively evaluate talent at every stage of the recruiting
            process, HackerRank helps companies hire skilled developers and
            innovate faster.
          </p>
        </section>
        <section id="past-partners">
          <div class="row">
            <div class="medium-12 text-center columns">
              <h2>Organizations we've worked with:</h2>
            </div>
          </div>
          <div class="row full-width text-center">
            <div class="keep-together">
              <a href="https://www.zara.com/">
                <img src={zara} alt="ZARA" />
              </a>
              <a href="https://www.softtek.com/es/">
                <img src={softtek} alt="Softtek" />
              </a>
              <a href="http://grupooesia.com/en/">
                <img src={oesia} alt="Oesía" />
              </a>
              <a href="https://www.improvingmetrics.com/">
                <img src={improvingmetrics} alt="Improving Metrics" />
              </a>
              <a href="https://www.altia.es/es/altia">
                <img src={altia} alt="altia" />
              </a>
            </div>
          </div>
        </section>
        <section id="careers">
          <h2>Careers</h2>
          <p>
            We currently have no open positions but hey, we are waiting for you.
            If you have passion and knowledge in software development, please
            send us your email for future positions.
          </p>
          <div>
            <button type="button" id="button-orange">
              <a href="mailto:hackathones@hackathones.com">Thanks</a>
            </button>
          </div>
        </section>
        <section id="Team">
          <h2>Our team</h2>
        </section>
      </section>
    </React.Fragment>
  );
}
