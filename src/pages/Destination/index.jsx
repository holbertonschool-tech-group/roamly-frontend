import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import Card from "../../components/Card";
import './style.scss';
import { v4 as uuidv4 } from 'uuid';
import AskQuote from "../../components/AskQuote";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDestinations } from "../../redux/slice/destinationSlice";

function Destination() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>'];
  const [selectedBtn, setselectedBtn] = useState(1);
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch()
  const tours = useSelector(state => state.destination.destinations)
  useEffect(() => {
    dispatch(fetchDestinations())
  }, []);


  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number);
  }

  const destination = searchParams.get("destination") || "";
  const checkInDate = searchParams.get("checkInDate") || "";
  const checkOutDate = searchParams.get("checkOutDate") || "";
  const priceLimit = searchParams.get("priceLimit") || "";

  return (
    <>
      {
        tours &&
        <div className="Destination ">
          <Hero title={"Tours List"} />
          <div className="container">
            <ReservationBar type='destination' />

            {destination && (
              <div className="heading">
                Showing {tours.length} results from <h6>{destination}</h6>
                {/*between <h6>{formatDate(checkInDate)}</h6> and <h6>{formatDate(checkOutDate)}</h6>*/}
                {priceLimit && (
                  <>
                    under <h6>${priceLimit}</h6>
                  </>
                )}
              </div>
            )}

            <div className="grid">
              {tours.map((tour) => {
                return <Card key={uuidv4()} data={tour} />;
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
      }

    </>
  );
}

export default Destination;
