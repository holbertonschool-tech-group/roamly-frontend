import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import AskQuote from "../../components/AskQuote";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import { fetchDestinations, filterDestinationByPrice, filterDestinationByTitle } from "../../redux/slice/destinationSlice";
import './style.scss';

function Destination() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>'];
  const [selectedBtn, setselectedBtn] = useState(1);
  const [searchParams] = useSearchParams();
  const destination = searchParams.get("destination") || "";
  const priceLimit = searchParams.get("priceLimit") || "";
  const dispatch = useDispatch()
  const tours = useSelector(state => state.destination.destinations)


  useEffect(() => {
    dispatch(fetchDestinations());
    if (destination) {
      dispatch(filterDestinationByTitle(destination));
    }
    if (priceLimit) {
      dispatch(filterDestinationByPrice(priceLimit));
    }
  }, [destination, dispatch, priceLimit]);




  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number);
  }



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
                return <Card key={uuidv4()} data={tour} type={'destination'} />;
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
