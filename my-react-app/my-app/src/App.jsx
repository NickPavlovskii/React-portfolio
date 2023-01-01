
import './App.css';

import Header from "./Section/header/Header"
import Nav from "./Section/nav/nav"
import About from "./Section/About/About"
import Experience from "./Section/experience/experience"
import Portfolio from "./Section/portfolio/portfolio"
import Contact from "./Section/contact/Contact"
import Footer from "./Section/Footer/Footer"
import AboutMe from "./Section/AboutMe/AboutMe"

function App() {
  return (
   <section>

    
      <Header/>
      <Nav/>
      <About/>
      <AboutMe/>
      <Experience/>
      
      <Portfolio/>
      <Contact/>
      <Footer/>
     
      </section>
  );
}

export default App;
