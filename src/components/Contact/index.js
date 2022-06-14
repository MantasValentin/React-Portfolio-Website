import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const refForm = useRef();

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 2300);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_gmail", refForm.current, "lyjSjFKxTv8Q-m2Ew")
      .then(
        () => {
          alert("Message successfully sent!");
        },
        () => {
          alert("Failed to send the message, please try again");
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
              strArray={["C", "o", "n", "t", "a", "c", "t", " "]}
              idx={15}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["m", "e"]}
              idx={24}
            />
          </h1>
          <p>
            I am interested in job opportunities - especially ambitious or large
            projects, as i would love to learn and get
            professional experience. However, if you have other request or
            question, don't hesitate to contact me using the form below either.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul className="grid-container">
                <li className="grid-item1">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="grid-item2">
                  <input
                    type="Email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li className="grid-item3">
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li className="grid-item4">
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li className="grid-item5">
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Mantas Valentinavičius,
          <br />
          Lithuania,
          <br />
          Vilnius, taikos g. 111 <br />
          <br />
          <span>MantasValentin@protonmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[54.71955, 25.21289]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[54.71955, 25.21289]}></Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
