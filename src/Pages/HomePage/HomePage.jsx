import React from "react";
import "./HomeStyle.css";
import Plx from "react-plx";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import About from "./About/About";
import Sponsors from "./Sponsors/Sponsors";
import Contact from "./Contact/Contact";
import RcText from "./RcText/RcText";
import ParticleBckg from "../../components/ParticleBckg/ParticleBckg";
import particleconfig from "./ParticleConfig";

const HomePage = () => {
  return (
    <>
      <div className="homepage-body" >
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
      <section className="homepage-section">
        <NavBar />
        <RcText />
        <Footer />
      </section>
      </Plx>
      <section id="about-us">
        <About />
      </section>
      {/* <section id="sponsors">
        <Sponsors />
      </section> */}
      <section id="contact-us">
        <Contact />
      </section>
      </div>
<ParticleBckg myparticle={particleconfig}/>
    </>
  );
};

export default HomePage;
