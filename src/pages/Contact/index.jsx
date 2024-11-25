import React, { useState } from "react";
import axios from "axios";
import MapImg from "../../assets/images/map.png";
import { v4 as uuidv4 } from "uuid";
import Hero from "../../components/Hero";
import AskQuote from "../../components/AskQuote";
import { contacts } from "./datas";
import "./style.scss";
import Swal from "sweetalert2";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_BASE_URL}contact`, {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }).then(() => {
        setSuccess("Message sent successfully!");


        Swal.fire({
          position: "center",
          icon: "success",
          title: "Message sent successfully!",
          showConfirmButton: true,
          confirmButtonText: "Continue",
          // timer: 1500
          text: " Your request will be reviewed, and you will be contacted shortly."
        });
        setFormData({ name: "", email: "", subject: "", message: "" });

      })
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess("Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Contact">
      <Hero title={"Contact us"} />
      <div className="container">
        <div className="contacts">
          {contacts.map((contact) => {
            return (
              <div className="contact" key={uuidv4()}>
                <div className="icon">
                  <contact.icon size={30} color="#ffffff" />
                </div>
                <h1>{contact.title}</h1>
                <p>{contact.info}</p>
              </div>
            );
          })}
        </div>
        <div className="lower">
          <img src={MapImg} alt="" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              cols={30}
              rows={7}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <AskQuote />
    </div>
  );
}

export default Contact;
