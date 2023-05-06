import React from "react";
import "./HomeStyle.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Sponsors from "./Sponsors/Sponsors";
import Contact from "./Contact/Contact";
import RcText from "./RcText/RcText";

const HomePage = () => {
  return (
    <>
      <div className="homepage-body">
      <section className="homepage-section">
        <NavBar />
        <RcText />
        <Footer />
      </section>
      <section id="about-us">
        <About />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
      </div>
    </>
  );
};

export default HomePage;
