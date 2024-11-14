import MapImg from '../../assets/images/map.png'

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
      <div className="lower">
        <img src={MapImg} alt="" />
        <form action="">
          <input type="text" placeholder='Your Name' />
          <input type="text" placeholder='Your Email' />
          <input type="text" placeholder='Subject' />
          <textarea name="" id="" placeholder='Message' cols={30} rows={7}></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
    <AskQuote />
  </div>;
}

export default Contact;
