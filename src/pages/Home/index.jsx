import AskQuote from "../../components/AskQuote";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import Services from "../../components/Services";
import './style.scss'

function Home() {
  return <div className="Home">

    <Hero home />


    <ReservationBar home />
    <Services />
    <AskQuote />
  </div>;
}

export default Home;
