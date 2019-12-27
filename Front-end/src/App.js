import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainMenu } from "./components/MainMenu";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SingUp";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { EventsPage } from "./pages/EventsPage";
import { AuthProvider } from "./shared/context/auth-context";
import { RankingPage } from "./pages/Rankings-page";
import { AboutUs } from "./pages/AboutUs";
import { EventDetail } from "./pages/EventDetail";
import { NewEvent } from "./pages/NewEvent";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/newEvent">
            <NewEvent />
          </Route>
          <Route path="/events">
            <EventsPage />
          </Route>
          <Route path="/event/:id">
            <EventDetail />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/user/:id">
            <Profile />
          </Route>
          <Route path="/ranking">
            <RankingPage />
          </Route>
          <Route path="/privacy">
            <Privacy />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
