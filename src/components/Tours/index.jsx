import { FaUmbrellaBeach } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { tours } from "./data";
import "./style.scss";

function Tours() {
    return (
        <div className="Tours container">
            <div className="head">
                <p>Destination</p> <h1>Tour Destination</h1>
            </div>
            <div className="grid">
                {tours.map((elem) => {
                    return (
                        <div className="card" key={elem.title}>
                            <div
                                className="img"
                                style={{
                                    backgroundImage: `url(${elem.img})`
                                }}
                            >
                                <div className="price">
                                    $ {elem.price}
                                    /person
                                </div>
                            </div>
                            <div className="text">
                                <div className="days"> {elem.duration} days tour</div>
                                <h3> {elem.title}</h3>
                                <div className="location">
                                    <FaLocationDot /> {elem.location}
                                </div>
                                <div className="details">
                                    <div className="detail">
                                        <FaBath /> {elem.bathrooms}
                                    </div>
                                    <div className="detail">
                                        <IoIosBed /> {elem.bedrooms}
                                    </div>
                                    <div className="detail">
                                        <FaUmbrellaBeach /> {elem.near}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tours;
