import React from "react";
import MainMenu from "./components/main-menus";
import Footer from "./components/footer";
import Slider from "./components/slider";
import { Home } from "./components/pages/principal-page";
import { Auth } from "./components/auth";

function App() {
  return (
    <React.Fragment>
      <header>
        <MainMenu />
        <Slider />
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
export default App;
