import React from "react";
import Hero from "../../components/Hero";
import AskQuote from "../../components/AskQuote";
import { contacts } from "./datas";
import './style.scss'
function Contact() {
  return <div className="Contact ">
    <Hero title={"Contact us"} />
    <div className="container">

      <div className="contacts">
        {
          contacts.map(contact => {
            return <div className="contact" key={contact.title}>

              <div className="icon">
                {
                  <contact.icon size={30} color="#ffffff" />
                }
              </div>
              <h1>{contact.title}</h1>
              <p>{contact.info}</p>
            </div>

          })
        }
      </div>
    </div>
    <AskQuote />
  </div>;
}

export default Contact;
