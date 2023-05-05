import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./WorkshopsStyle.css";
import img1 from "../../assets/images/workshop/Bluetooth car.jpg";
import img2 from "../../assets/images/workshop/Monster.jpg";
import img3 from "../../assets/images/general/logorc (2).png";

const WorkshopsPage = () => {
  return (
    <>
      <Menu right>
        <a className="menu-item" href="/">
          HOME
        </a>
        <a className="menu-item" href="events">
          EVENTS
        </a>
        <a className="menu-item" href="galery">
          GALLERY
        </a>
        <a className="menu-item" href="team">
          TEAM
        </a>
      </Menu>

      <div className="allwebd">
        <div className="workshop-head">
          <h1>Web-Development Workshops</h1>
        </div>
        <div className="work-container">
          <div className="allclasses">
            <div className="video">
              <iframe
                width={400}
                height={350}
                src="https://www.youtube.com/embed/jgteldtj1MQ"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="webd-para unbeauty">
              <h3>HTML Classes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptate quas aperiam incidunt. Quam, veritatis
                totam asperiores expedita consectetur molestias officiis vitae
                nostrum! Dolore.
              </p>
            </div>
          </div>
          <div className="allclasses">
            <div className="video">
              <iframe
                width={400}
                height={350}
                src="https://www.youtube.com/embed/4yXkEc5Jd0g"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="webd-para">
              <h3>CSS Classes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptate quas aperiam incidunt. Quam, veritatis
                totam asperiores expedita consectetur molestias officiis vitae
                nostrum! Dolore.
              </p>
            </div>
          </div>
          <div className="allclasses">
            <div className="video">
              <iframe
                width={400}
                height={350}
                src="https://www.youtube.com/embed/xO9wP6FoDik"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="webd-para">
              <h3>Javascript Classes</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptate quas aperiam incidunt. Quam, veritatis
                totam asperiores expedita consectetur molestias officiis vitae
                nostrum! Dolore.
              </p>
            </div>
          </div>
          <div className="allclasses">
            <div className="video">
              <iframe
                width={400}
                height={350}
                src="https://www.youtube.com/embed/yWmRVsPA648"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="webd-para">
              <h3>Backend-PHP Classes </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptate quas aperiam incidunt. Quam, veritatis
                totam asperiores expedita consectetur molestias officiis vitae
                nostrum! Dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="allcircuitary">
        <div className="workshop-head">
          <h1>Circuitary Workshops</h1>
        </div>
        <div className="work-container">
          <div className="allclasses">
            <div className="video">
              <img src={img1} alt />
            </div>
            <div className="webd-para">
              <h3>Bluetooth Car Project</h3>
              <p>
                A Bluetooth car project involves building a remote-controlled
                car that is controlled using a Bluetooth connection between the
                car and a mobile device or computer. The project typically
                involves selecting a hardware platform, assembling the car,
                programming the microcontroller, and establishing a Bluetooth
                connection.
              </p>
            </div>
          </div>
          <div className="allclasses">
            <div className="video">
              <img src={img2} alt />
            </div>
            <div className="webd-para">
              <h3>Monster Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium voluptate quas aperiam incidunt. Quam, veritatis
                totam asperiores expedita consectetur molestias officiis vitae
                nostrum! Dolore.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer>
    <div className="footer-container">
  <div className="col">
    <img src={img3} alt="logo" className="footlogo" />
    <div className="footercontent">
      <h2 className="footerheading">Robotics Club</h2>
    </div>
  </div>
  <div className="footer-side-col">


  <div className="col">
  <h3>
    ADDRESS
    <div className="underline"><span /></div>
  </h3>
  <p>MMMUT, Gorakhpur</p>
  <p className="email-id"><a href="mailto:mgsaryananand2003@gmail.com">mgsaryananand2003@gmail.com</a></p>
  <p className="email-id"><a href="mailto:anubhavgu2002@gmail.com">anubhavgu2002@gmail.com</a></p>
</div>

        <div className="col">
  <h3>HOME</h3>
  <ul>
    <li><a href="#about">About Us</a></li>
    <li>
      <a href="#">Contribute</a>
    </li>
  </ul>
</div>

        <div className="col">
  <h3>
    CONTACTS
    <div className="underline"><span /></div>
  </h3>
  <div className="social-menu">
    <ul>
      <a href="#" target="_blank">
        <li id="social-twitter"><i className="fab fa-2x fa-twitter" /></li>
      </a>
      <a href="#" target="_blank">
        <li id="social-github"><i className="fab fa-2x fa-github" /></li>
      </a>
      <a href="#" target="_blank">
        <li id="social-linkedin"><i className="fab fa-2x fa-linkedin-in" /></li>
      </a>
    </ul>
  </div>
</div>

  </div>
</div>

</footer>

    </>
  );
};

export default WorkshopsPage;
