import React from "react";
import { Grommet } from "grommet";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  return (
    <Grommet plain>
      <div className="App">
        <Nav />
        <Hero />
        <About />
      </div>
    </Grommet>
  );
}

export default App;
