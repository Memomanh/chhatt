import React from "react";
import "./blogs.css";
import BlogItem from "./BlogItem";
const BlogList = ({ blogs }) => {
  return (
    <div className="bloglist-wrap">
      {/* <h1>hey,type your need here</h1> */}
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default BlogList;
