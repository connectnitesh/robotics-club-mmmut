import React from 'react';
import './ContactStyle.css'
import { IoMdCall } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import { BiMap } from 'react-icons/bi'

const Contact = () => {
  return (
    <section id='contact'>
      <h2 id='contact_head'>Contact Us</h2>
      <div className="contact-container">
        <div className="left-contact">

          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14253.622450778397!2d83.4331276!3d26.7314295!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39915ca3e2aa136b%3A0xc039bdf0211338a9!2sMadan%20Mohan%20Malaviya%20University%20Of%20Technology!5e0!3m2!1sen!2sin!4v1682628507785!5m2!1sen!2sin"
            width={600} height={410} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />


        </div>
        <div className="right-contact">
          <form action method="post">
            <div className="row">
              <div className='row_details'>
                <label htmlFor="">Name</label>
                <br />
                <input type="text" id="name" className="form-control" name="Name" />
              </div>
              <div className='row_details'>
                <label htmlFor="">Email</label>
                <br />
                <input type="email" id="email" className="form-control" name="Email" />
              </div>
              <div className='row_details'>
                <label htmlFor="">Your Message</label>
                <br />
                <textarea name="" id="" cols="20" rows="5"></textarea>
              </div>
              <div className="row_details">
                <button type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="details_container">
        <div className="details">
          <a href=""><IoMdCall /></a>
          <p>1553333311</p>
        </div>

        <div className="details">
          <a href=""><HiOutlineMail /></a>
          <p>webcifar@gmail.com</p>
        </div>

        <div className="details">
          <a href=""><BiMap /></a>
          <p>Chittagong, Banga</p>
        </div>
      </div>

    </section>
  );
}

export default Contact