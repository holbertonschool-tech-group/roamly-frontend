import { FaUmbrellaBeach } from "react-icons/fa";

import { IoIosBed } from "react-icons/io";

import { FaBath } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { blogs } from "./data";
import "./style.scss";

function Blog() {
    return (
        <div className="Blog container">
            <div className="head">
                <p>Our Blog</p>
                <h1>Recent Post</h1>
            </div>
            <div className="grid">
                {blogs.map((elem) => {
                    return (
                        <div className="card" key={elem.title}>
                            <div
                                className="img"
                                style={{
                                    backgroundImage: `url(${elem.img})`
                                }}
                            >
                                <div className="price">
                                    <div className="day">
                                        {elem.day}
                                    </div>
                                    <div className="dates">
                                        <div className="date">{elem.year}</div>
                                        <div className="date">{elem.month}</div>
                                    </div>

                                </div>
                            </div>
                            <div className="text">
                                <div className="days">
                                    {elem.duration}
                                    days tour
                                </div>
                                <h3> {elem.title}</h3>
                                <button>read more</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Blog;
