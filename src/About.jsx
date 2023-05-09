import React, { useState } from "react";
// import web from "../src/images/online-teaching.png";
// import { NavLink } from "react-router-dom";
// import Common from './Common';
import bloglist from "./data";
import EmptyList from "./empty"
import "./about.css";
import BlogList from "./Community";
import Search from "./Searchbar";
const About = () => {
  const[blogs ,setblogs] = useState(bloglist);
  const[searchKey ,setsearchKey] =useState("");

  const handleSearchSubmit=event=>{
    event.preventDefault();
    handleSearchResults()
  }
  //searhc for blogs by category
  const handleSearchResults=()=>{
    const allBlogs =bloglist;

    const filteredBlogs = allBlogs.filter(blog=>blog.names.toLowerCase().includes(searchKey().trim()));
    setblogs(filteredBlogs);
  }
  const handleClearSearch=()=>{
    setblogs(bloglist);
    setsearchKey("");
  }
  return (  
    <>
      <div className="pen">
        <i>
          <h1 className="com">
            Hello Cuians, This community helps to find your{" "}
            <strong className="chht">ChaTT</strong>.{" "}
          </h1>
        </i>
        <Search  value={searchKey} formSubmit={handleSearchSubmit} 
        clearSearch ={handleClearSearch}
        handleSearchKey={(e)=>setsearchKey(e.target.value)}/>
        {/* <BlogList blogs={blogs} /> */}
        {!blogs.length?<EmptyList/> : <BlogList blogs={blogs} />}
      </div>
      
    </>
  );
};

export default About;
