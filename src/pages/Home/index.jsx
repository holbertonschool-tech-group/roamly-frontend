import AskQuote from "../../components/AskQuote";
import Blog from "../../components/Blog";
import Destinations from "../../components/Destinations";
import Feedback from "../../components/Feedback";
import Hero from "../../components/Hero";
import Memorable from "../../components/Memorable";
import ReservationBar from "../../components/ReservationBar";
import Services from "../../components/Services";
import Tours from "../../components/Tours";
import VideoOverlay from "../../components/VideoOverlay";
import "./style.scss";

function Home() {
  return (
    <div className="Home">
      <Hero home />
      <ReservationBar home />
      <Services />
      <Destinations />
      <Tours />
      <VideoOverlay />
      <Memorable />
      <Feedback />
      {/* <Blog /> */}
      <AskQuote />
    </div>
  );
}

export default Home;
