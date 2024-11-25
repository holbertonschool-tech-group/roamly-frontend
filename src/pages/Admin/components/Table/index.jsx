import { useEffect, useState, useMemo } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchBookings } from "../../../../redux/slice/bookingSlice";
import { fetchHotels } from "../../../../redux/slice/hotelSlice";
import { fetchDestinations } from "../../../../redux/slice/destinationSlice";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import axios from "axios";
import { fetchContact } from "../../../../redux/slice/contactSlice";

function Table({ active }) {
    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.bookings.bookings);
    const destinations = useSelector((state) => state.destination.destinations);
    const hotels = useSelector((state) => state.hotel.hotels);
    const contact = useSelector((state) => state.contact.contact);

    const [rows, setRows] = useState([]);

    // Predefined rows
    const bookingRows = ["name", "email", "destination", "checkInDate", "checkOutDate", "message", "status"];
    const hotelRows = ["title", "price", "location", "bathrooms", "bedrooms", "review", "delete"];
    const destinationRows = ["title", "price", "location", "bathrooms", "bedrooms", "review", "delete"];
    const contactRows = ["name", "email", "subject", "message"];

    // Data selection based on `active`
    const data = useMemo(() => {
        switch (active) {
            case "bookings":
                return bookings;
            case "hotels":
                return hotels;
            case "destinations":
                return destinations;
            case "contact":
                return contact;



            default:
                return [];
        }
    }, [active, bookings, hotels, destinations, contact]);

    // Set rows based on `active`
    useEffect(() => {
        switch (active) {
            case "bookings":
                dispatch(fetchBookings());
                setRows(bookingRows);
                break;
            case "hotels":
                dispatch(fetchHotels());
                setRows(hotelRows);
                break;
            case "destinations":
                dispatch(fetchDestinations());
                setRows(destinationRows);
                break;
            case "contact":
                dispatch(fetchContact());
                setRows(contactRows);
                break;
            default:
                break;
        }
    }, [active, dispatch]);

    const handleDelete = async (id) => {
        const confirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        });

        if (confirmed.isConfirmed) {
            try {
                await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}${active}/${id}`);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                dispatch(active === "bookings" ? fetchBookings() : active === "hotels" ? fetchHotels() : fetchDestinations());
            } catch (error) {
                Swal.fire("Error!", "Failed to delete the item.", "error");
            }
        }
    };

    return (
        <div className="Table container">
            <p className="head">{active}</p>
            <div className="table">
                {/* Table Header */}
                <div className="table-header">
                    {rows.map((row) => (
                        <div className="header__item" key={row}>
                            <div className="filter__link filter__link--number">
                                {row}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Table Content */}
                <div className="table-content">
                    {data?.map((item) => (
                        <div className="table-row" key={item._id}>
                            {rows.map((row) => {
                                if (row === "review") {
                                    return (
                                        <div className="table-data" key={row}>
                                            {item[row]} ⭐
                                        </div>
                                    );
                                }
                                // if (row === "checkInDate" || row === "checkOutDate") {
                                //     return (
                                //         <div className="table-data" key={row}>
                                //             {formatDate(item[row])}
                                //         </div>
                                //     );
                                // }
                                if (row === "delete") {
                                    return (
                                        <div className="table-data" key={row}>
                                            <button onClick={() => handleDelete(item._id)}>Delete</button>
                                        </div>
                                    );
                                }
                                if (row === "status") {
                                    const handleStatusChange = async (e) => {
                                        const newValue = e.target.value;

                                        if (newValue === "delete") {
                                            // Confirm deletion with Swal
                                            const result = await Swal.fire({
                                                title: 'Are you sure?',
                                                text: "This action cannot be undone.",
                                                icon: 'warning',
                                                showCancelButton: true,
                                                confirmButtonText: 'Yes, delete it!',
                                                cancelButtonText: 'Cancel',
                                            });

                                            if (result.isConfirmed) {
                                                try {
                                                    // Send DELETE request to backend
                                                    await axios.delete(`${import.meta.env.VITE_APP_BASE_URL}${active}/${item._id}`);

                                                    Swal.fire("Deleted!", "Item has been deleted.", "success");

                                                    // Optionally refresh the data after deletion
                                                    dispatch(active === "bookings" ? fetchBookings() : active === "hotels" ? fetchHotels() : fetchDestinations());
                                                } catch (error) {
                                                    Swal.fire("Error!", "Failed to delete the item.", "error");
                                                }
                                            }
                                        } else {
                                            try {
                                                // Prepare updated item payload
                                                const updatedItem = {
                                                    ...item,
                                                    status: newValue, // Update the status field
                                                };

                                                // Send PUT request to the backend
                                                await axios.put(`${import.meta.env.VITE_APP_BASE_URL}${active}/${item._id}`, updatedItem);

                                                Swal.fire("Success!", "Status updated successfully.", "success");

                                                // Optionally refresh the data after update
                                                dispatch(active === "bookings" ? fetchBookings() : active === "hotels" ? fetchHotels() : fetchDestinations());
                                            } catch (error) {
                                                Swal.fire("Error!", "Failed to update the status.", "error");
                                            }
                                        }
                                    };

                                    return (
                                        <div className="table-data" key={row}>
                                            <select
                                                value={item.status} // Bind to the item's current status
                                                onChange={handleStatusChange}
                                            >
                                                <option value="created">Created</option>
                                                <option value="accepted">Accepted</option>
                                                <option value="rejected">Rejected</option>
                                                <option value="delete">Delete</option> {/* Add delete option */}
                                            </select>
                                        </div>
                                    );
                                }



                                return (
                                    <div className="table-data" key={row}>
                                        {item[row] || "-"}
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
