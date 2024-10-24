import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/images/msg-icon.png";
import mail_icon from "../../assets/images/mail-icon.png";
import phone_icon from "../../assets/images/phone-icon.png";
import location_icon from "../../assets/images/location-icon.png";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-col">
          <h3>
            Send us a message <img src={msg_icon} alt="" />{" "}
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
            nisi ad id rem laboriosam sapiente suscipit alias corporis nulla
            doloremque illo! Minus explicabo suscipit repellendus quisquam vitae
            dolores magni quasi!
          </p>
          <ul>
            <li>
              {" "}
              <img src={mail_icon} alt="" /> Contact@CA.dev
            </li>
            <li>
              {" "}
              <img src={phone_icon} alt="" /> +91 777-666-999-44
            </li>
            <li>
              {" "}
              <img src={location_icon} alt="" /> Gali no:4 Govind nagar,
              Moradabad, Uttar Pradesh, India
            </li>
          </ul>
        </div>
        <div className="contact-col">
          <form>
            <label>Your name</label>
            <input
              className="msg"
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
            <label>Your Number</label>
            <input
              className="msg"
              type="tel"
              name="phone"
              placeholder="Enter your mobile number"
              required
            />
            <label>Write your messages here</label>
            <textarea
              className="msg"
              name="message"
              id=""
              rows="6"
              placeholder="Enter your message"
              required
              style={{ borderRadius: "12px" }}
            ></textarea>
            <a className="btn-dark-btn lr" type="submit" method="post">
              Submit now
        </a>
          </form>
        </div>
      </div>
    </>
  );
};
  export default Contact;
