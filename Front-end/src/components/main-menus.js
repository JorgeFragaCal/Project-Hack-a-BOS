import React from "react";
function MainMenu() {
  return (
    <nav className="menu">
      <ul className="hidden">
        <li>
          <a href="index.html">
            <img src="" alt="logo" />
          </a>
        </li>
        <li>
          <a href="/ranking">
            <i className="fa fa-trophy"></i> Ranking
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-calendar"></i> Events calendar
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-info-circle"></i> About us
          </a>
        </li>
        <li>
          <a href="login.html">Log In</a> |<a href="signup.html">Sign up</a>
        </li>
      </ul>
      <button
        id="menu-button"
        onClick={() => {
          //  menu.classList.toggle("hidden");
          //  overflow.classList.toggle("hidden");
        }}
      >
        <i className="fa fa-bars fa-lg"></i>
      </button>
    </nav>
  );
}

export default MainMenu;
