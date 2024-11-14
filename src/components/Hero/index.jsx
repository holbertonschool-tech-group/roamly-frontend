import { FaChevronRight } from "react-icons/fa";
import HeroBg from "../../assets/images/hero_bg.jpg";
import HomeBg from "../../assets/images/home_bg.jpg";

import React, { useState } from 'react';
import { IoIosPlay } from "react-icons/io";
import 'react-modal-video/css/modal-video.css';
import { Link } from "react-router-dom";
import "./style.scss";
import ModalVideo from "react-modal-video";

function Hero({ home, title }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Hero">

      {home ? (
        <div
          className="big heroCont"
          style={{
            backgroundImage: `url(${HomeBg})`
          }}
        >

          <div className="content container">
            <div className="texts">
              <button className="openBtn" onClick={handleClick}>

                <IoIosPlay size={32} />
              </button>

              <p>Welcome to Pacific</p>
              <div className="head">Discover Your Favorite Place with Us</div>
              <div className="sub">

                Travel to the any corner of the world, without going around in
                circles
              </div>
            </div>
            <button className="openBtn" onClick={handleClick}>

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

      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="vsBWQlI7By4"
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
}

export default Hero;
