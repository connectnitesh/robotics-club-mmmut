import React, {useEffect} from "react";
import "./ContactStyle.css";
import { Link } from "react-router-dom";
import { IoMdCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { BiMap } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration: 800});
  },[]);
  return (
    <section id="contact" className="contact-sec">
      <h1 data-aos="fade-right">Contact Us</h1>
      <div className="contact-container">
        <div data-aos="flip-up" className="left-contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.470221725312!2d83.43147071504104!3d26.72936673320687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914363ffffffef%3A0xb0560a34fcd804c0!2sRobotics%20Club%2C%20MMMUT%20Gorakhpur!5e0!3m2!1sen!2sin!4v1683674881349!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
        </div>
        <div data-aos="fade-up" className="right-contact">
          <form action method="post">
            <div className="row">
              <div className="row_details">
                <label htmlFor="">Name</label>
                <br />
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="Name"
                />
              </div>
              <div className="row_details">
                <label htmlFor="">Email</label>
                <br />
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="Email"
                />
              </div>
              <div className="row_details">
                <label htmlFor="">Your Message</label>
                <br />
                <textarea name="" id="" cols="20" rows="4"></textarea>
              </div>
              <div className="row_details">
                <button type="submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div data-aos="fade-up" className="details-container">
        <a href="tel:+918081165522">
          <IoMdCall />  <span>+91 80811 65522</span>
        </a>
        <a href="mailto:roboticsclub.mmmut@gmail.com" target="_blank">
          <HiOutlineMail /> 
 <span>roboticsclub.mmmut@gmail.com</span>
        </a>
        <a href="https://goo.gl/maps/7nbySXkE2MyNMVYL6?coh=178571&entry=tt" target="_blank">
          <BiMap /> <span>Robotics Club MMMUT</span> 
        </a>
      </div>

      <ul class="footer-mobile-homepage">
          <li>
            <a href="https://www.facebook.com/roboticsclub.mmmut/">
              <BsFacebook />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/robotics_club_mmmut/">
              <BsInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCq1SGYOxepwOHBE8eQcE_Pg">
              <BsYoutube />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/robotics-club-mmmut-gorakhpur/mycompany/">
              <BsLinkedin />
            </a>
          </li>
        </ul>

      <div className="copyright-homepage"> ©️ Robotics Club MMMUT All rights reserved. </div>
    </section>
  );
};

export default Contact;
