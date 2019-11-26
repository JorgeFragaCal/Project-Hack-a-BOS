import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { MainMenu } from "./components/main-menus";
import Footer from "./components/footer";
import { Home } from "./components/pages/home";
import { Auth } from "./components/pages/auth";
import { SignUp } from "./components/pages/singUp";
import { Privacy } from "./components/pages/privacy";
import { Terms } from "./components/pages/terms";
import { NewEvent } from "./components/pages/newEvent";

function App() {
  return (
    // <React.Fragment>
    //   <header>
    //     <MainMenu />
    //     <Slider />
    //   </header>
    //   <main>
    //     <Home />
    //   </main>
    //   <footer>
    //     <Footer />
    //   </footer>
    // </React.Fragment>
    <BrowserRouter>
      <MainMenu />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/newEvent">
          <NewEvent />
        </Route>
        {/* <Route path="/rankings">
          <SectionRanking />
        </Route> */}
        {/* <Route path="/events">
          <SectionEvents />
        </Route> */}
        {/* <Route path="/event/:eventDetailId">
          <EventDetail />
        </Route> */}
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/privacy">
          <Privacy />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
        {/* <Route path="*">
          <NotFound />
        </Route> */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
