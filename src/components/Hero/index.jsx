import { FaChevronRight } from "react-icons/fa";
import HomeBg from "../../assets/images/home_bg.jpg";
import HeroBg from "../../assets/images/hero_bg.jpg";

import { IoIosPlay } from "react-icons/io";
import "./style.scss";

import { Link } from "react-router-dom";

function Hero({ home, title }) {
  return (
    <div className="Hero">

      {home ? (
        <div
          className="big heroCont"
          style={{
            backgroundImage: `url(${HomeBg})`
          }}
        >

          <div className="content">

            <div className="texts">

              <p>Welcome to Pacific</p>
              <div className="head">Discover Your Favorite Place with Us</div>
              <div className="sub">

                Travel to the any corner of the world, without going around in
                circles
              </div>
            </div>
            <button>

              <IoIosPlay size={32} />
            </button>
          </div>
          <div className="overlay"></div>
        </div>
      ) : (
        <div
          className="small heroCont"
          style={{
            backgroundImage: `url(${HeroBg})`
          }}
        >
          <div className="content">

            <div className="breadcrumbs">

              <Link to="/">
                Home <FaChevronRight />
              </Link>
              <Link to="/">
                {title} <FaChevronRight />
              </Link>
            </div>
            <div className="title"> {title}</div>
          </div>
          <div className="overlay"></div>
        </div>
      )}
    </div>
  );
}

export default Hero;
