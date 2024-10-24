import React from "react";
import "./About.css";
import about_img from "../../assets/images/about.png";
import play_icon from "../../assets/images/play-icon.png";

const About = ({setPlayState}) => {
  return (
    <>
      <div className="about">
        <div className="about-left">
          <img src={about_img} alt="" className="about-img" />
          <img src={play_icon} alt="" className="play-icon" onClick={() => {setPlayState(true)}} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsa error corrupti enim beatae repellendus minus, incidunt non molestiae illum optio reprehenderit eius possimus itaque, blanditiis nobis dolores ut sapiente corporis pariatur voluptas? Pariatur, minus sed! Quae vero facilis praesentium!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus numquam est, sapiente inventore quam quos molestiae excepturi ex minus voluptate eveniet temporibus porro culpa, praesentium maiores corporis adipisci, veritatis sit sunt qui dolores? Quasi, ea.</p>
        </div>
      </div>
    </>
  );
};

export default About;
