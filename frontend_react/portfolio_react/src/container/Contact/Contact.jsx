import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

import "./Contact.scss";
import NavigationDots from "../../components/NavigationDots";
import SocialMedia from "../../components/SocialMedia";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();

    const form = formRef.current;

    if (form.checkValidity()) {
      setLoading(true);
      try {
        await emailjs.sendForm(
          "service_th3jz7e",
          "template_hwj2arc",
          form,
          "k3MJOTTvMUWYJXQVi"
        );
        toast.success("Your message was sent successfully");
        formRef.current.reset();
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }
  };

  return (
    <div
      className="app__flex"
      id="contact"
      style={{ backgroundColor: "var(--white-color)" }}
    >
      <SocialMedia></SocialMedia>
      <motion.div
        whileInView={{
          y: [100, 0],
          opacity: [0, 1],
          transition: { duration: 0.5 },
        }}
        className="app__contact"
      >
        <h2 className="head-text">Contact Me</h2>
        {/* <div className="app__contact-info">
        <div className="gmail-info">

          <p className="p-text">zakimouzaoui123@gmail.com</p>
        </div>
        <div className="phone-info">
          <p className="p-text">(+213)558405601</p>
        </div>
      </div> */}
        <form onSubmit={sendMessage} ref={formRef} className="contact-form">
          <input
            type="text"
            required
            id="name"
            placeholder="Your name"
            name="name"
          />
          <input
            type="email"
            is={"email"}
            required
            id="email"
            placeholder="Your email"
            name="email"
          />
          <textarea
            type="text"
            rows={6}
            id="message"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button>
            {loading === true ? (
              <ClipLoader
                color="white"
                loading={loading}
                size={20}
              ></ClipLoader>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
      <NavigationDots item="contact"></NavigationDots>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Contact;
