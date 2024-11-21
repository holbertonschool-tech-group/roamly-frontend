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
import { useSelector } from "react-redux";

function Hotel() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>'];
  const [selectedBtn, setselectedBtn] = useState(1);
  const [hotels, setHotels] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function fetchHotels() {
      try {
        const response = await axios.get("http://localhost:5000/hotels");
        setHotels(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    }
    fetchHotels();
  }, []);

  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number);
  }

  const destination = searchParams.get("destination") || "";
  const checkInDate = searchParams.get("checkInDate") || "";
  const checkOutDate = searchParams.get("checkOutDate") || "";
  const priceLimit = searchParams.get("priceLimit") || "";

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
          {hotels.map((hotel) => {
            return <Card key={uuidv4()} data={hotel} />;
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
