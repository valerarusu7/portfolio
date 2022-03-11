import { MutableRefObject, useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import LoadingGif from "../../assets/loading.gif";

function Contact() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef() as MutableRefObject<HTMLFormElement>;

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm("service_qa1lj2i", "template_wxv5z1p", form.current, "D8O0dM7m5ZiawgERZ").then(
      (result: any) => {
        setFormName("");
        setFormEmail("");
        setFormMessage("");
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      },
      (error: any) => {
        console.log(error.text);
        setLoading(false);
        setTimeout(() => {
          setError(true);
        }, 3000);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>valeriu.rusu111@gmail.com</h5>
            <a href="mailto:valeriu.rusu111@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Valeriu Rusu</h5>
            <a target="_blank" href="https://m.me/valera.rusu111">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+4591105409</h5>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=+4591105409">
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            value={formEmail}
            onChange={(e) => setFormEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          ></textarea>
          <div className="send__container">
            {loading ? (
              <img src={LoadingGif} alt="loading..." style={{ width: 50 }} />
            ) : (
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            )}
            {success ? <h5 className="notify-success fade-in-text">Message Sent Successfully!</h5> : null}
            {error ? <h5 className="notify-error fade-in-text">Error! Try Again!</h5> : null}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
