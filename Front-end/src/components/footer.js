import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <nav className="services">
        <h3>Hackatones</h3>
        <h5>(c) 2019, Hackathones Inc.</h5>
        <ul>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
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
    </footer>
  );
}

export default Footer;
