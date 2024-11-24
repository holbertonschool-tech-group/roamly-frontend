import PropTypes from "prop-types";
import { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterHotelsByName, filterHotelsByPrice } from "../../redux/slice/hotelSlice";
import "./style.scss";
import { filterDestinationByPrice, filterDestinationByTitle } from "../../redux/slice/destinationSlice";

function ReservationBar({ home, type }) {
    const [active, setActive] = useState("destination");
    const [destination, setDestination] = useState("");
    const [checkInDate, setCheckInDate] = useState("");
    const [checkOutDate, setCheckOutDate] = useState("");
    const [priceLimit, setPriceLimit] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function handleSection(value) {
        setActive(value);
    }

    const handleSearch = (e) => {
        e.preventDefault();

        const params = new URLSearchParams({
            destination,
            checkInDate,
            checkOutDate,
            priceLimit,
        }).toString();

        console.log(`Navigating to /${active}?${params}`);

        if (active == "destination") {
            priceLimit && dispatch(filterDestinationByPrice(priceLimit))
            destination && dispatch(filterDestinationByTitle(destination))
        } else {
            priceLimit && dispatch(filterHotelsByPrice(priceLimit))
            destination && dispatch(filterHotelsByName(destination))
        }



        home ? navigate(`/${active}?${params}`) : navigate(`/${type}?${params}`);

    };

    return (
        <div
            className="ReservationBar container"
            style={{ marginTop: home ? "-100px" : "7rem" }}
        >
            {home && (
                <div className="controls">
                    <button
                        className={active === "destination" ? "activeBtn" : ""}
                        onClick={() => handleSection("destination")}
                    >
                        Search Tour
                    </button>
                    <button
                        className={active === "hotel" ? "activeBtn" : ""}
                        onClick={() => handleSection("hotel")}
                    >
                        Hotel
                    </button>
                </div>
            )}
            <form
                onSubmit={handleSearch}
                style={{ borderTopLeftRadius: home && 0 }}
            >
                <div className="input">
                    <div className="title">Destination</div>
                    <div className="field">
                        <IoSearch fill="#0000001a" size={20} />
                        <input
                            type="text"
                            placeholder="Search place"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                        />
                    </div>
                </div>
                <div className="input">
                    <div className="title">Check-in date</div>
                    <div className="field">
                        <FaRegCalendarAlt fill="#0000001a" size={20} />
                        <input
                            type="date"
                            value={checkInDate}
                            placeholder="Check-in date"
                            onChange={(e) => setCheckInDate(e.target.value)}
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                </div>
                <div className="input">
                    <div className="title">Check-out date</div>
                    <div className="field">
                        <FaRegCalendarAlt fill="#0000001a" size={20} />
                        <input
                            type="date"
                            value={checkOutDate}
                            placeholder="Check-out date"
                            onChange={(e) => setCheckOutDate(e.target.value)}
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")}
                        />
                    </div>
                </div>
                <div className="input">
                    <div className="title">Price Limit</div>
                    <div className="field">
                        <FaChevronDown fill="#0000001a" size={20} />
                        <select
                            name="price"
                            id="price"
                            value={priceLimit}
                            onChange={(e) => setPriceLimit(e.target.value)}
                        >
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="search">
                    Search
                </button>
            </form>
        </div>
    );
}

ReservationBar.propTypes = {
    home: PropTypes.bool,
    type: PropTypes.string
};

export default ReservationBar;
