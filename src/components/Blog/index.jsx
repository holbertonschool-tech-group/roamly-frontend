import { v4 as uuidv4 } from "uuid";

import BlogCard from "../BlogCard";
import { blogs } from "./data";
import "./style.scss";

function Blog() {
    return (
        <div className="Blog container">
            <div className="head">
                <p>Our Blog</p>
                <h1>Recent Post</h1>
            </div>
            <div className="grid">
                {blogs.map(elem => {
                    return <BlogCard key={uuidv4()} data={elem} />;
                })}
            </div>
        </div>
    );
}

export default Blog;
