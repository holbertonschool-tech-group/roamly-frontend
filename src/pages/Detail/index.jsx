import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { tours } from "./data";
import './style.scss';
function Detail() {
    const { id } = useParams();
    // <p>ID: {id}</p>
    const data = tours[0]
    return (
        <div className="detailPage container">
            <div className="imgs">
                <img className="img1" src={data.img} alt="" />
                <img className="img2" src={data.img} alt="" />

            </div>
            <div className="head">
                <h1>{data.title}</h1>
                <div className="stars">
                    <div className="icons">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                    (5.0)
                </div>
            </div>
            <div className="location">
                <FaLocationDot />
                {data.location}
            </div>

        </div>
    );
}

export default Detail;
