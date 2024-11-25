import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { navsExperience, navsInfromation } from "./navs";
import './style.scss';
import { v4 as uuidv4 } from 'uuid';
function Footer() {

    return (
        <div className='Footer'>
            <div className="container">
                <div className="elem">
                    <div className="title">
                        About
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    <div className="icons">
                        <div className="icon"><FaTwitter /></div>
                        <div className="icon"><FaFacebookF /></div>
                        <div className="icon"><FaInstagram /></div>
                    </div>
                </div>
                <div className="elem">
                    <div className="title">
                        Infromation
                    </div>
                    {
                        navsInfromation.map(nav => {
                            return <a key={uuidv4()}>{nav}</a>
                        })
                    }

                </div>
                <div className="elem">
                    <div className="title">
                        Experience
                    </div>
                    {
                        navsExperience.map(nav => {
                            return <a key={uuidv4()}>{nav}</a>
                        })
                    }

                </div>
                <div className="elem">
                    <div className="title">
                        Have a Questions?
                    </div>
                    <div className="url">
                        <FaLocationDot fill="var(--brand-color)" />
                        <a >Baku, Azerbaijan</a>
                    </div>
                    <div className="url">
                        <a ><FaPhoneAlt fill="var(--brand-color)" />+994 111 11 11</a></div>
                    <div className="url">
<<<<<<< HEAD
                        <a ><FaPaperPlane fill="var(--brand-color)" />roamly@gmail.com</a></div>
=======
                        <a ><FaPaperPlane fill="var(--brand-color)" />roamly@mail.eu</a></div>
>>>>>>> 5eb63e91c854f6f35ecdff9f42619e456daa7eb9
                </div>
            </div>
        </div>
    )
}

export default Footer
