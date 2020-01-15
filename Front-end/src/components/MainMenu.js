import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../shared/context/auth-context";
export function MainMenu() {
  const [open, setOpen] = useState(true);
  const { isAuthenticated, logout, user } = useAuth();
  return (
    <header>
      <nav className="menu">
        <ul className={` ${open ? "hidden" : ""}`}>
          <li>
            <Link to="/">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/ranking">
              <i className="fa fa-trophy"></i> Ranking
            </Link>
          </li>
          <li>
            <Link to="/events">
              <i className="fa fa-calendar"></i> Events calendar
            </Link>
          </li>
          <li>
            <Link to="/about">
              <i className="fa fa-info-circle"></i> About us
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Link to={`/myprofile/${user.userData.id}`}>My profile</Link>
            ) : (
              <Link to="/login">Sign In</Link>
            )}
            {isAuthenticated ? (
              <button className="button-blue" onClick={logout}>
                Logout
              </button>
            ) : (
              <Link to="/signup">Sign Up</Link>
            )}
          </li>
        </ul>
        <button id="menu-button" onClick={e => setOpen(!open)}>
          <i className="fa fa-bars fa-lg"></i>
        </button>
      </nav>
      <div className={`site-overlay-active ${open ? "hidden" : ""}`}></div>
    </header>
  );
}
