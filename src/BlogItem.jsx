import React from "react";
import "./blogs.css";
import Chip from "./Chips";
import { Link } from "react-router-dom";
// import BlogList from "./data";
const BlogItem = ({
  blog: { id, desc, title, price, img, names, contact, user, date },
}) => {
  return (
    <>
      <div className="blogitem">
        <div className="desc">
          <b>
            <p1>{desc}</p1>
          </b>
        </div>
        <h1>{names}</h1>
        <h1>{price}</h1>
        <button>{contact}</button>
        <footer>
          <div className="foot">
            <div className="blogItem-author">
              <p1>{user}</p1>
              <div className="date">
                <p1>{date}</p1>
              </div>
            </div>
            <Link className="blogItem" to={`/blog/${id}`}>
              {" "}
              <button className="bn">➔</button>
            </Link>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogItem;
