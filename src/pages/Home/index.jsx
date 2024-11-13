import AskQuote from "../../components/AskQuote";
import Destinations from "../../components/Destinations";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import Services from "../../components/Services";
import Tours from "../../components/Tours";
import "./style.scss";

function Home() {
  return (
    <div className="Home">
      <Hero home />
      <ReservationBar home />
      <Services />
      <Destinations />
      <Tours />
      <AskQuote />
    </div>
  );
}

export default Home;
