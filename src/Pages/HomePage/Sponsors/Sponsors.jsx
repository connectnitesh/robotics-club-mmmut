import React,{useEffect} from "react";
import "./SponsorsStyle.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Sponsors = () => {

  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);
  return (
    <section className="sponsor-sec" id="sponsor">
      <div data-aos="fade-right"><h1>Sponsors</h1></div>
      <div className="sponsor-list">
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/a.jpg")}
          alt=""
          srcset=""
        />
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/b.jpg")}
          alt=""
          srcset=""
        />
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/c.jpg")}
          alt=""
          srcset=""
        />
      </div>
      <div className="sponsor-list">
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/a.jpg")}
          alt=""
          srcset=""
        />
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/b.jpg")}
          alt=""
          srcset=""
        />
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/c.jpg")}
          alt=""
          srcset=""
        />
      </div>
      <div className="sponsor-list">
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/a.jpg")}
          alt=""
          srcset=""
        />
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/b.jpg")}
          alt=""
          srcset=""
        />
        <img data-aos="flip-up"
          src={require("../../../assets/images/sponsors/c.jpg")}
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
};

export default Sponsors;
