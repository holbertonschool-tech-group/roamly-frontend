import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import AskQuote from "../../components/AskQuote";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import { fetchHotels, filterHotelsByName, filterHotelsByPrice, resetFilters } from "../../redux/slice/hotelSlice";
import './style.scss';

function Hotel() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>'];
  const [selectedBtn, setselectedBtn] = useState(1);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch()
  const hotels = useSelector(state => state.hotel.filteredHotels);
  const destination = searchParams.get("destination") || "";
  const priceLimit = searchParams.get("priceLimit") || "";
  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  useEffect(() => {
    if (priceLimit) {
      dispatch(filterHotelsByPrice(priceLimit));
    }
    if (destination) {
      dispatch(filterHotelsByName(destination));
    }
  }, [priceLimit, destination, dispatch]);

  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number);
  }



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
              <div key={hotel._id}>
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
