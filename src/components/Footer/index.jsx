import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLocationDot, FaTwitter } from "react-icons/fa6";
import { navsExperience, navsInfromation } from "./navs";
import './style.scss';
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
                            return <a key={nav}>{nav}</a>
                        })
                    }

                </div>
                <div className="elem">
                    <div className="title">
                        Experience
                    </div>
                    {
                        navsExperience.map(nav => {
                            return <a key={nav}>{nav}</a>
                        })
                    }

                </div>
                <div className="elem">
                    <div className="title">
                        Have a Questions?
                    </div>
                    <div className="url">
                        <FaLocationDot fill="#f15d30" />
                        <a >203 Fake St. Mountain View, San Francisco, California, USA</a>
                    </div>
                    <div className="url">
                        <a ><FaPhoneAlt fill="#f15d30" />+2 392 3929 210</a></div>
                    <div className="url">
                        <a ><FaPaperPlane fill="#f15d30" />info@yourdomain.com</a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
