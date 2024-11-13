import { FaUmbrellaBeach } from "react-icons/fa";

import { IoIosBed } from "react-icons/io";

import { FaBath } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";

import { blogs } from "./data";
import "./style.scss";
import BlogCard from "../BlogCard";

function Blog() {
    return (
        <div className="Blog container">
            <div className="head">
                <p>Our Blog</p>
                <h1>Recent Post</h1>
            </div>
            <div className="grid">
                {blogs.map((elem) => {
                    return (
                        <BlogCard key={elem.title} data={elem} />
                    );
                })}
            </div>
        </div>
    );
}

export default Blog;
