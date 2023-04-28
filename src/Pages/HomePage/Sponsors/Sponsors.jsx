import React from "react";
import "./SponsorsStyle.css";

const Sponsors = () => {
  return (
    <section className="sponsor-sec" id="sponsor">
      <h1>Sponsors</h1>
      <div className="sponsor-list">
        <img
          src={require("../../../assets/images/sponsors/a.jpg")}
          alt=""
          srcset=""
        />
        <img
          src={require("../../../assets/images/sponsors/b.jpg")}
          alt=""
          srcset=""
        />
        <img
          src={require("../../../assets/images/sponsors/c.jpg")}
          alt=""
          srcset=""
        />
      </div>
      <div className="sponsor-list">
        <img
          src={require("../../../assets/images/sponsors/a.jpg")}
          alt=""
          srcset=""
        />
        <img
          src={require("../../../assets/images/sponsors/b.jpg")}
          alt=""
          srcset=""
        />
        <img
          src={require("../../../assets/images/sponsors/c.jpg")}
          alt=""
          srcset=""
        />
      </div>
      <div className="sponsor-list">
        <img
          src={require("../../../assets/images/sponsors/a.jpg")}
          alt=""
          srcset=""
        />
        <img
          src={require("../../../assets/images/sponsors/b.jpg")}
          alt=""
          srcset=""
        />
        <img
          src={require("../../../assets/images/sponsors/c.jpg")}
          alt=""
          srcset=""
        />
      </div>
    </section>
  );
};

export default Sponsors;
