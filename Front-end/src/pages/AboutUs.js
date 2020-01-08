import React from "react";
import "../css/about.css";
import ProfilePhotosAndres from "../img/team/andres.jpeg";
import ProfilePhotosJorge from "../img/team/jorge.jpeg";
import Partners from "../components/Section-parter";

export function AboutUs() {
  return (
    <React.Fragment>
      <section id="about">
        <section id="Company">
          <h2>Company</h2>

          <p>
            Hackathones was founded by three junior programmers in A Coruña.
            When{" "}
            <u>
              <strong>
                <a href="https://hack-a-bos.com/">HACK A BOSS</a>
              </strong>
            </u>{" "}
            provided us with the project, we took it as a challenge. Our
            intention is to create a technological community and organize the
            world’s hackathons and make them universally accessible and useful
            by enabling tech recruiters and hiring managers to objectively
            evaluate talent at every stage of the recruiting process. So
            Hackathone helps companies hire skilled developers and innovate
            faster.
          </p>

          <p>
            Hackathones are already being celebrated{" "}
            <u>
              <strong>
                <a href="https://hackathones.com/">in many cities.</a>
              </strong>
            </u>{" "}
          </p>
          <p>
            If your company is looking for developers, people with special
            skills, etc. but it is difficult to find them, you can sponsor a
            hackathone with those skills you need and propose a challenge. Sure
            you will find what you are looking for.
          </p>
          <p>
            If you are a developer and you are looking for challenges that allow
            you to access a great company, you just have to sign up for the
            nearest Hackathone.
          </p>
        </section>

        <section id="past-partners">
          <div class="row">
            <div class="medium-12 text-center columns">
              <h2>Organizations we would like to work with:</h2>
            </div>
          </div>
          <Partners />
        </section>

        <section id="careers">
          <h2>Careers</h2>
          <p>
            We currently have no open positions but hey, we are waiting for you.
            If you have passion and knowledge in software development,{" "}
            <u>
              <strong>
                <a href="mailto:hackathones@hackathones.com?Subject=Sending%20CV%20email">
                  please send us your email for future positions.
                </a>
              </strong>
            </u>{" "}
          </p>
        </section>
        <h2>Team</h2>
        <section id="team">
          <div className="leader">
            <h3>Jorge Fraga</h3>
            <a href="https://www.linkedin.com/in/jorge-fraga-cal-programacion-y-video/">
              <div
                className="image-team"
                style={{
                  backgroundImage: `url(${ProfilePhotosJorge}`
                }}
              />
            </a>
            <nav className="social">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/jorge-fraga-cal-programacion-y-video/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/JorgeFragaCal">
                    <i className="fa fa-github " />
                  </a>
                </li>
                <li>
                  <a href="https://">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="leader">
            <h3>Andrés Yáñez</h3>
            <a href="https://www.linkedin.com/in/jorge-fraga-cal-programacion-y-video/">
              <div
                className="image-team"
                style={{
                  backgroundImage: `url(${ProfilePhotosAndres}`
                }}
              />
            </a>
            <nav className="social">
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/andres-ya%C3%B1ez-florez/">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/andresyf">
                    <i className="fa fa-github " />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/ndrsyanez">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </section>
    </React.Fragment>
  );
}
