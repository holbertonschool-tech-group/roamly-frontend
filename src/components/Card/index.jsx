import PropTypes from 'prop-types';
import { FaCar } from "react-icons/fa";
import { FaBath, FaLocationDot } from 'react-icons/fa6';
import { IoIosBed } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import './style.scss';
function Card({ data, type }) {
    const navigate = useNavigate();
    return (
        <div className="card" onClick={() => {
            navigate(`/details/${data?._id}?category=${type}`)
        }}>
            <div
                className="img"
                style={{
                    backgroundImage: `url(${data?.img[0]})`
                }}
            >
                <div className="price">
                    $ {data?.price}
                    /person
                </div>
            </div>
            <div className="text">
                <div className="days"> {data?.duration} days tour</div>
                <h3> {data?.title}</h3>
                <div className="location">
                    <FaLocationDot /> {data?.location}
                </div>
                <div className="details">
                    <div className="detail">
                        <FaBath /> {data?.bathrooms}
                    </div>
                    <div className="detail">
                        <IoIosBed /> {data?.bedrooms}
                    </div>
                    <div className="detail">
                        <FaCar /> {data?.near}
                    </div>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    data: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        duration: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        bathrooms: PropTypes.number.isRequired,
        bedrooms: PropTypes.number.isRequired,
        near: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.string
}

export default Card