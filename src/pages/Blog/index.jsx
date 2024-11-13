import React, { useState } from "react";
import AskQuote from "../../components/AskQuote";
import BlogCard from "../../components/BlogCard";
import Hero from "../../components/Hero";
import { blogs } from "./data";
import './style.scss';
function Blog() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>']
  const [selectedBtn, setselectedBtn] = useState(1);
  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number)

  }
  return (
    <div className="BlogPage ">
      <Hero title={"Blog"} />
      <div className="container">

        <div className="grid">
          {
            blogs.map(tour => {
              return <BlogCard key={tour.title} data={tour} />

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

export default Blog;
