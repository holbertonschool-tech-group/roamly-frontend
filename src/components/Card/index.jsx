import React from 'react'
import './style.scss'
import { FaBath, FaLocationDot, FaUmbrellaBeach } from 'react-icons/fa6'
import { IoIosBed } from 'react-icons/io'
function Card({ data }) {
    return (
        <div className="card" >
            <div
                className="img"
                style={{
                    backgroundImage: `url(${data.img})`
                }}
            >
                <div className="price">
                    $ {data.price}
                    /person
                </div>
            </div>
            <div className="text">
                <div className="days"> {data.duration} days tour</div>
                <h3> {data.title}</h3>
                <div className="location">
                    <FaLocationDot /> {data.location}
                </div>
                <div className="details">
                    <div className="detail">
                        <FaBath /> {data.bathrooms}
                    </div>
                    <div className="detail">
                        <IoIosBed /> {data.bedrooms}
                    </div>
                    <div className="detail">
                        <FaUmbrellaBeach /> {data.near}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card