import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import "./index.scss";

const Contact = () => {
  const [letterClass, setLeeterClass] = useState("text-animate");
  const ref = useRef;

  useEffect(() => {
    setTimeout(() => {
      return setLeeterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs;
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={"C,o,n,t,a,c,t, ,m,e".split(",")}
              idx={15}
            />
          </h1>
          <p>Open to cooperation ideas</p>
          <div className="contact-form">
            <form>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea name="message" placeholder="Message" required />
                </li>
                <li>
                  <input type="sumbit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
