import React from "react";
// import web from "../src/images/img2.svg";
import ren from "../src/rentss.png";
import web from "../src/rent.jpg.png";
import { NavLink } from "react-router-dom";
import Crousel from "./Crousel";
const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-item-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>{props.name} </h1>
                  <h2 className="my-3">
                    We will Provide a{" "}
                    <strong className="brand-name"> ChhATT</strong> for your
                    Stay.
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="Common img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* imgsrc={ren} */}
          <div className="post">
            <div className="pros">{/* imgsrc={web} */}</div>
            <strong>
              Rent your property to CUians with{" "}
              <strong className="brand-name"> ChhATT.com</strong>{" "}
            </strong>
            <span className="paraa">Find your tenants in just one step.</span>
            <div className="upp">
              <div className="list">
                <span className="specs">10k+ Monthly Search</span>
                <span className="specs">2k+ Property Listing</span>
                <span className="specs">1k+ Tenants </span>
              
              </div>
              <button className="props">Post Your Property</button>
            </div>
          </div>
          <Crousel/>
        </div>
      </section>
    </>
  );
};

export default Common;
