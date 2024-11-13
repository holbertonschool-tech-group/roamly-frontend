import AskQuote from "../../components/AskQuote";
import Feedback from "../../components/Feedback";
import Hero from "../../components/Hero";
import Memorable from "../../components/Memorable";
import Services from "../../components/Services";
import VideoOverlay from "../../components/VideoOverlay";

function About() {
  return <>
    <Hero title={'About Us'} />
    <Services />
    <VideoOverlay />
    <Memorable />
    <Feedback />
    <AskQuote />
  </>;
}

export default About;
