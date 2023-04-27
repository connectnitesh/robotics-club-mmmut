import React from 'react';
import './ContactStyle.css'
import { IoMdCall } from 'react-icons/io'
import { HiOutlineMail } from 'react-icons/hi'
import { BiMap } from 'react-icons/bi'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact-container">
        <div className="left-contact">

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

    </section>
  );
}

export default Contact