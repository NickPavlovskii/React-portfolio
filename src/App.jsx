import "./App.css";

import Header from "./Section/header/Header";
import Nav from "./Section/nav/nav";
import About from "./Section/About/About";
import Experience from "./Section/experience/experience";
import Portfolio from "./Section/portfolio/portfolio";
import Contact from "./Section/contact/Contact";
import Footer from "./Section/Footer/Footer";
import AboutMe from "./Section/AboutMe/AboutMe";
import ProjectData from "./Section/portfolio/ProjectData";

import React, { useState } from "react";

function App() {
  const { projectItems } = ProjectData;
  return (
    <section>
      <Header />
      <Nav />
      <About />
      <AboutMe />
      <Experience />
      <Portfolio projectItems={projectItems} />
      <Contact />
      <Footer />
    </section>
  );
}

export default App;
