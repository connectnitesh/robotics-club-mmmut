import React from "react";
import { useEffect, useState } from "react";
import "./HomeStyle.css";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Sponsors from "./Sponsors/Sponsors";
import Contact from "./Contact/Contact";
import RcText from "./RcText/RcText";
import ParticleBckg from "../../components/ParticleBckg/ParticleBckg";
import particleconfig from './ParticleConfiga.js'
import Plx from "react-plx";

const HomePage = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <>
    <div>
     {loading ? (
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>
      ) : (
      <div>
      <Plx
        parallaxData={[
          {
            start: 0,
            end: 200,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              },
              {
                startValue: 1,
                endValue: 1.6,
                property: "scale"
              }
            ]
          }
        ]}
      >
      <section data-aos="zoom-out" className="mainPage" id="home-page">
        <NavBar />
        <RcText />
        <Footer />
      </section>
      </Plx>
      <section id="about-us">
        <About />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="contact-us">
        <Contact />
      </section>
      <ParticleBckg myparticle={particleconfig}/>
      </div>
      )}
    </div>
    </>
  );
};

export default HomePage;
