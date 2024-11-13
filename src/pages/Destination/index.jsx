import React, { useState } from "react";
import Hero from "../../components/Hero";
import ReservationBar from "../../components/ReservationBar";
import Card from "../../components/Card";
import { tours } from "./data";
import './style.scss'
import AskQuote from "../../components/AskQuote";
function Destination() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>']
  const [selectedBtn, setselectedBtn] = useState(1);
  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number)

  }
  return (
    <div className="Destination ">
      <Hero title={"Tours List"} />
      <div className="container">

        <ReservationBar />
        <div className="grid">
          {
            tours.map(tour => {
              return <Card key={tour.title} data={tour} />

            })
          }
        </div>
        <div className="btns">
          {
            buttons.map(btn => {
              return <button className={selectedBtn == btn && 'active'} onClick={() => {
                handleSelect(btn)
              }} key={btn}>{btn}</button>
            })
          }
        </div>
        <AskQuote />
      </div>
    </div>
  );
}

export default Destination;
