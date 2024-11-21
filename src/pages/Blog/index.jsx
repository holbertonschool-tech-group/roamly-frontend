import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from "react";
import axios from "axios";
import AskQuote from "../../components/AskQuote";
import BlogCard from "../../components/BlogCard";
import Hero from "../../components/Hero";
import './style.scss';

function Blog() {
  const buttons = ['<', 1, 2, 3, 4, 5, 6, '>'];
  const [selectedBtn, setselectedBtn] = useState(1);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await axios.get("http://localhost:5000/blogposts");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    }
    fetchBlogs();
  }, []);

  function handleSelect(number) {
    !isNaN(number) && setselectedBtn(number);
  }

  return (
    <div className="BlogPage ">
      <Hero title={"Blog"} />
      <div className="container">
        <div className="grid">
          {blogs.map((blog) => {
            return <BlogCard key={uuidv4()} data={blog} />;
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

export default Blog;
