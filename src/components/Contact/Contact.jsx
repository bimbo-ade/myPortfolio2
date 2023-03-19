import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v273w7i",
        "template_z0a91wj",
        form.current,
        "k1OBQS1NdZD35H449"
      )
      .then(
        (result) => {
          alert("message sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: "100" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {" "}
      <motion.div
        className="contact-container"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
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
              Im happy to answer any questions you have. Reach out to me on any
              of the social platforms I have provided below.
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
            {/* <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Type a message..."></textarea>
            <button>
              <span></span> Send
            </button> */}{" "}
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
