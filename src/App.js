import React from "react";
import { Grommet } from "grommet";
import Theme from "./components/theme.js";
import Nav from "./components/nav";
import Hero from "./components/hero";
import About from "./components/about";
import Grid from "./components/grid";
import Footer from "./components/footer";

function App() {
    return (
        <Grommet theme={Theme}>
            <div className="App">
                <Nav />
                <Hero />
                <About />
                <Grid />
                <Footer />
            </div>
        </Grommet>
    );
}

export default App;
