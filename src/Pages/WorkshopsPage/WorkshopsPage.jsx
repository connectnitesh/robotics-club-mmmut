import React from 'react'
import { elastic as Menu } from 'react-burger-menu';
import './WorkshopsStyle.css'

const WorkshopsPage = () => {
  return (
    <>

    <Menu right>
      <a className="menu-item" href="/">
        HOME
      </a>
      <a className="menu-item" href="/">
        EVENTS
      </a>
      <a className="menu-item" href="/">
        GALLERY
      </a>
      <a className="menu-item" href="/">
        CONTACT US
      </a>
      
    </Menu>
     <div className="work-container">
    <div className="video">
      <iframe width={550} height={415} src="https://www.youtube.com/embed/S6TgOnTC8mw" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    </div>
    <div className="webd"> 
      <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
        </p>
    </div>
  </div>
  <div className="work-container">
    <div className="video">
      <iframe width={550} height={415} src="https://www.youtube.com/embed/S6TgOnTC8mw" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    </div>
    <div className="webd">
      <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services. A more comprehensive list of tasks to which Web development commonly refers, may include Web engineering, Web design, Web content development, client liaison, client-side/server-side scripting, Web server and network security configuration, and e-commerce development.
       </p>
    </div>
  </div>

    </>
   
  

  )
}

export default WorkshopsPage