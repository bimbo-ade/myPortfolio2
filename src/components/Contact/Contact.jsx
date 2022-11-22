import React from "react";
import "./Contact.css";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div>
      {" "}
      <div className="contact-container">
        <h1 className="header">
          {" "}
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
          <span> </span>
          <span>M</span>
          <span>e</span>
        </h1>{" "}
        <div className="contact-cont">
          <div className="contact">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              autem sapiente eius, corporis nostrum officiis id deserunt porro,
              tenetur corrupti reiciendis asperiores eos iusto saepe cupiditate
              voluptas libero minus accusamus!
            </p>
            <div className="social-icons">
              <AiOutlineGithub />
              <AiFillTwitterCircle />
              <AiFillInstagram />
              <AiOutlineMail />
              <BsTelephone />
            </div>
          </div>
          <div className="form">
            <input type="text" placeholder="name" />
            <input type="text" placeholder="subject" />
            <textarea placeholder="type a message..."></textarea>
            <button>
              <span></span> send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
