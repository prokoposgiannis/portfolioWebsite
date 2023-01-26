import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect, useRef } from "react";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLeeterClass] = useState("text-animate");
  const form = useRef();

  useEffect(() => {
    setTimeout(() => {
      return setLeeterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n3uwrju",
        "template_qy3ltji",
        form.current,
        "QwOxNNGrK36uMHf_d"
      )
      .then(
        () => {
          alert("Message succesfully sent.");
          window.location.reload(false);
        },
        (e) => {
          alert(`Message failed to be sent.${JSON.stringify(e)}`);
        }
      );
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
            <form ref={form} onSubmit={sendEmail}>
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          John Prokopos,
          <br />
          Greece
          <br />
          Athens
          <br />
          <span>giannisprokopos@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[44.96366, 19.61045]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[44.96366, 19.61045]}>
              <Popup>I am here! (not)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
