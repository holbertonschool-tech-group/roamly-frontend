import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import Card from "../../components/Card";
import { v4 as uuidv4 } from 'uuid';
import './style.scss';
import AskQuote from "../../components/AskQuote";
import { useSearchParams } from "react-router-dom";
import { formatDate } from "../../utils/functions";
import { useDispatch, useSelector } from "react-redux";
import { fetchHotels } from "../../redux/slice/hotelSlice";

function Hotel() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>'];
  const [selectedBtn, setselectedBtn] = useState(1);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch()
  const hotels = useSelector(state => state.hotel.hotels)
  useEffect(() => {
    dispatch(fetchHotels())
  }, []);

  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number);
  }

  const destination = searchParams.get("destination") || "";
  const checkInDate = searchParams.get("checkInDate") || "";
  const checkOutDate = searchParams.get("checkOutDate") || "";
  const priceLimit = searchParams.get("priceLimit") || "";

  const handleReservation = async (userId, hotelId) => {
    try {
      const response = await axios.post("http://localhost:5000/reservations", {
        user_id: userId,
        hotel_id: hotelId,
        check_in: checkInDate,
        check_out: checkOutDate
      });
      console.log("Reservation created successfully:", response.data);
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };

  return (
    <div className="Hotel ">
      <Hero title={"Hotel"} />
      <div className="container">
        <ReservationBar type='hotel' />
        {destination && (
          <div className="heading">
            Showing {hotels.length} results from <h6>{destination}</h6>
            {/* between <h6>{formatDate(checkInDate)}</h6> and <h6>{formatDate(checkOutDate)}</h6> */}
            {priceLimit && (
              <>
                under <h6>${priceLimit}</h6>
              </>
            )}
          </div>
        )}
        <div className="grid">
          {hotels?.map((hotel) => {
            return (
              <div key={uuidv4()}>
                <Card data={hotel} type={'hotel'} />
                {/* <button onClick={() => handleReservation(1, hotel.id)}>Reserve</button> */}
              </div>
            );
          })}
        </div>
        <div className="btns">
          {buttons.map((btn) => {
            return (
              <button
                className={selectedBtn == btn && "active"}
                onClick={() => {
                  handleSelect(btn);
                }}
                key={uuidv4()}
              >
                {btn}
              </button>
            );
          })}
        </div>
        <AskQuote />
      </div>
    </div>
  );
}

export default Hotel;
