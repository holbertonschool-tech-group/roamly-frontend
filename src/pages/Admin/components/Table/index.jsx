import { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../../../../redux/slice/bookingSlice";
import { fetchHotels } from "../../../../redux/slice/hotelSlice";
import { fetchDestinations } from "../../../../redux/slice/destinationSlice";
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from "../../../../utils/functions";

function Table({ active }) {
    const dispatch = useDispatch();
    const bookings = useSelector(state => state.bookings.bookings);
    const destinations = useSelector(state => state.destination.destinations);
    const hotels = useSelector(state => state.hotel.hotels);
    const [datas, setdatas] = useState([]);
    const [rows, setrows] = useState([]);

    const bookingRows = ['name', 'email', 'destination', 'checkInDate', 'checkOutDate', 'message'];
    const hotelRows = ['title', 'price', 'location', 'bathrooms', 'bedrooms', 'review'];  // Updated to match hotel data structure
    const destinationRows = ['title', 'price', 'location', 'bathrooms', 'bedrooms', 'review'];  // Modify based on destination data structure

    useEffect(() => {
        if (active === 'bookings') {
            dispatch(fetchBookings());
            setdatas(bookings);
            setrows(bookingRows);
        } else if (active === 'hotels') {
            dispatch(fetchHotels());
            setdatas(hotels);
            setrows(hotelRows);
        } else if (active === 'destinations') {
            dispatch(fetchDestinations());
            setdatas(destinations);
            setrows(destinationRows);
        }
    }, [active, dispatch]);

    return (
        <div className="Table container">
            <p className="head">{active}</p>
            <div className="table">
                <div className="table-header">
                    {rows.map(row => (
                        <div className="header__item" key={uuidv4()}>
                            <a
                                id="draws"
                                className="filter__link filter__link--number"
                                href="#"
                            >
                                {row}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="table-content">
                    {datas?.map((elem, index) => (
                        <div className="table-row" key={uuidv4()}>
                            {rows.map((row) => {
                                const value = elem[row];
                                // Handle specific fields like 'review' for hotels
                                if (row === 'review') {
                                    return (
                                        <div className="table-data" key={uuidv4()}>
                                            {value} ⭐
                                        </div>
                                    );
                                }
                                // Handle date fields (if needed in other data types)
                                else if (row === 'checkInDate' || row === 'checkOutDate') {
                                    return (
                                        <div className="table-data" key={uuidv4()}>
                                            {formatDate(value)}
                                        </div>
                                    );
                                }
                                // For other generic fields like name, price, etc.
                                return (
                                    <div className="table-data" key={uuidv4()}>
                                        {value}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Table;
