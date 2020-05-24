import React from "react";
import { Grommet } from "grommet";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Grid from "./components/grid";

function App() {
  return (
    <Grommet plain>
      <div className="App">
        <Nav />
        <Hero />
        <About />
        <Grid />
      </div>
    </Grommet>
  );
}

export default App;
