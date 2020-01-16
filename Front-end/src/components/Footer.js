import React from "react";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer>
      <nav className="services">
        <ul>
          <li>
            <h5>(c) 2019, Hackathones Inc.</h5>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/terms">Terms of Service</Link>
          </li>
        </ul>
      </nav>

      <nav className="social">
        <ul>
          <li>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <i className="fab fa-linkedin" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook " />
            </a>
          </li>
        </ul>
      </nav>

      <section className="contact">
        <address>
          <ul>
            <li>
              <a href="mailto: info@hackathons.com">
                <i className="fa fa-envelope fa-fw" />
                info@hackathons.com
              </a>
            </li>
            <li>
              <a href="tel:+34981123456">
                <i className="fa fa-phone fa-fw" />
                981 123 456
              </a>
            </li>
          </ul>
        </address>
      </section>
    </footer>
  );
}
