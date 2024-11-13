import { FaUmbrellaBeach } from "react-icons/fa";
import { IoIosBed } from "react-icons/io";
import { FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { tours } from "./data";
import "./style.scss";
import Card from "../Card";

function Tours() {
    return (
        <div className="Tours container">
            <div className="head">
                <p>Destination</p> <h1>Tour Destination</h1>
            </div>
            <div className="grid">
                {tours.map((elem) => {
                    return (
                        <Card data={elem} key={elem.title} />
                    );
                })}
            </div>
        </div>
    );
}

export default Tours;
