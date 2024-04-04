import './WorkshopsStyle.css';
import img1 from '../../assets/images/workshop/bluetoothcar.jpg';
import img2 from '../../assets/images/workshop/monsterpro.jpg';
import NavMenu from '../../components/NavMenu/NavMenu';
import FooterBar from '../../components/FooterBar/FooterBar';

const WorkshopsPage = () => {
  return (
    <>
    <div className='workshop-bckg'>

        <NavMenu />
      <div className="workshopPage-container">
        <h1>Web-Development Workshops</h1>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/jgteldtj1MQ"
              title="YouTube workshop-leftcontent player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>HTML Classes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptate quas aperiam incidunt. Quam, veritatis totam
              asperiores expedita consectetur molestias officiis vitae nostrum!
              Dolore.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/4yXkEc5Jd0g"
              title="YouTube workshop-leftcontent player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>CSS Classes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptate quas aperiam incidunt. Quam, veritatis totam
              asperiores expedita consectetur molestias officiis vitae nostrum!
              Dolore.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/xO9wP6FoDik"
              title="YouTube workshop-video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>Javascript Classes</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptate quas aperiam incidunt. Quam, veritatis totam
              asperiores expedita consectetur molestias officiis vitae nostrum!
              Dolore.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <iframe className="embed-video"
              src="https://www.youtube.com/embed/yWmRVsPA648"
              title="YouTube workshop-video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="workshop-rightcontent">
            <h3>Backend-PHP Classes </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptate quas aperiam incidunt. Quam, veritatis totam
              asperiores expedita consectetur molestias officiis vitae nostrum!
              Dolore.
            </p>
          </div>
        </div>

        <h1>Circuitary Workshops</h1>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <img src={img1} className="embed-video" alt="bluetooth-car" />
          </div>
          <div className="workshop-rightcontent">
            <h3>Bluetooth Car Project</h3>
            <p>
              A Bluetooth car project involves building a remote-controlled car
              that is controlled using a Bluetooth connection between the car
              and a mobile device or computer. The project typically involves
              selecting a hardware platform, assembling the car, programming the
              microcontroller, and establishing a Bluetooth connection.
            </p>
          </div>
        </div>
        <div className="workshop-content">
          <div className="workshop-leftcontent">
            <img src={img2} className="embed-video" alt="monster" />
          </div>
          <div className="workshop-rightcontent">
            <h3>Monster Design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium voluptate quas aperiam incidunt. Quam, veritatis totam
              asperiores expedita consectetur molestias officiis vitae nostrum!
              Doloree.
            </p>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
    </>
  );
};

export default WorkshopsPage;