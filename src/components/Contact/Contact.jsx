import React from "react";
import "./Contact.css";

import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlineGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "100" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {" "}
      <div className="contact-container">
        {" "}
        <div className="underlay">Contact</div>
        <motion.h1
          className="header"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          {" "}
          <span>C</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>a</span>
          <span>c</span>
          <span>t</span>
        </motion.h1>{" "}
        <div className="contact-cont">
          <div className="contact">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              autem sapiente eius, corporis nostrum officiis id deserunt porro,
              tenetur corrupti reiciendis asperiores eos iusto saepe cupiditate
              voluptas libero minus accusamus!
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/bimbo-ade"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <AiOutlineGithub />
              </a>

              <a
                href="https://twitter.com/damisayrah_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillTwitterCircle />
              </a>

              <a
                href="https://www.instagram.com/damisayrah_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
              <a
                href="mailto:bimboadeyemi65@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>

              <a
                href="tel:+2348162471353"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTelephone />
              </a>
            </div>
          </div>
          <div className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Type a message..."></textarea>
            <button>
              <span></span> Send
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
