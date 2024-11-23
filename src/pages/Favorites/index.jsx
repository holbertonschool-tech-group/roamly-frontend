import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AskQuote from "../../components/AskQuote";
import Card from "../../components/Card";
import Hero from "../../components/Hero";
import { fetchDestinations } from '../../redux/slice/destinationSlice';
import { fetchHotels } from '../../redux/slice/hotelSlice';
import './style.scss';

function Favorites() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHotels());
    dispatch(fetchDestinations());
  }, [dispatch]);

  const hotels = useSelector(state => state.hotel.hotels);
  const tours = useSelector(state => state.destination.destinations);
  const favs = JSON.parse(localStorage.getItem('favorites')) || [];

  let hotelIds = favs.filter(item => item.category === "hotel").map(item => String(item.id));
  let destinationIds = favs.filter(item => item.category === "destination").map(item => String(item.id));
  console.log(hotels
    .filter(hotel => hotelIds == (hotel.id)))
  if (hotelIds.length === 1) {
    hotelIds = [hotelIds];
  }

  if (typeof destinationIds === 'string') {
    destinationIds = [destinationIds];
  }
  return (
    <div className="Favorites">
      <Hero title={"Favorites"} />
      <div className="container">
        {/* Hotels Grid */}
        <h1>Hotels</h1>
        <div className="grid">
          {
            favs.map(elem => {
              if (elem.category === 'hotel') {
                const hotelData = hotels.filter(hotel => hotel.id == elem.id);
                return <Card key={elem.id} data={hotelData[0]} type='hotel' />;
              }
            })
          }
        </div>


        {/* Destinations Grid */}
        <h1>Destinations</h1>
        <div className="grid">
          {
            favs.map(elem => {
              if (elem.category === 'destination') {
                const tourData = tours.filter(hotel => hotel.id == elem.id);
                return <Card key={elem.id} data={tourData[0]} type='destination' />;
              }
            })
          }
        </div>

        <AskQuote />
      </div>
    </div>
  );
}

export default Favorites;
