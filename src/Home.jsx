import React from "react";
import web from "../src/rent.jpg.png";

import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Be Stressless for your Accommodation Cuians."
        imgsrc={web}
        visit="/service"
        btname="Search Now"
      />
    </>
  );
};

export default Home;
