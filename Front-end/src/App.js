import React from "react";
import MainMenu from "./components/main-menus";
import SectionEvents from "./components/section-events";
import Footer from "./components/footer";
import SectionRanking from "./components/section-ranking";
import Partners from "./components/section-parter";
import Slider from "./components/slider";

function App() {
  return (
    <React.Fragment>
      <header>
        <MainMenu />
        <Slider />
      </header>
      <main>
        <SectionEvents />
        <SectionRanking />
        <Partners />
      </main>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
}
export default App;
