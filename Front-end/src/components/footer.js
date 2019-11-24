import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <div className="site-overlay-active hidden"></div>
      <nav className="services">
        <h3>Hackatones</h3>
        <h5>(c) 2019, Hackathones Inc.</h5>
        <ul>
          <li>
            <a href="views/privacy.html">Privacy Policy</a>
          </li>
          <li>
            <a href="views/terms.html">Terms of Service</a>
          </li>
        </ul>
      </nav>
      <nav className="social">
        <h3>Social</h3>
        <ul>
          <li>
            <a href="https://twitter.com/">
              <i className="fa fa-twitter"></i> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fa fa-linkedin"></i> Linkedin
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fa fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook"></i> Facebook
            </a>
          </li>
        </ul>
      </nav>
      <section className="contact">
        <h3>Contact us</h3>
        <address>
          <a href="mailto: info@hackathons.com">
            <i className="fa fa-envelope"></i> info@hackathons.com
          </a>
          <a href="/">
            <i className="fa fa-phone"></i> 9** *** ***
          </a>
        </address>
      </section>
    </React.Fragment>
  );
}

export default Footer;
