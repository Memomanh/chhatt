import React  from "react";
import "./category.css";  
function Cards(props) {
 
  return (
    <>
   
      <body>
    {/* <Filters/> */}
        {/* <div className="cards"> */}
        <div className="const1">
        <div className="card">
          <div className="yt">
            <img src={props.imgsrc} alt="pic " className="imgcard"></img>
            <div className="items">
              <span className="cardprice">{props.price} </span>
              <span className="cardinfo">{props.title} </span>
              <span className="cardcategory"> </span>
              <div className="spec">
                <span className="specs"> {props.specs1}</span>
                <span className="specs"> {props.specs2}</span>
                <span className="specs"> {props.specs3}</span>
              </div>
              <i>
                <h3 className="cardtitle">{props.name} </h3>
              </i>
              <div className="item">
                <a href={props.link}>
                  <b>
                    <button>Visit Now</button>
                  </b>
                </a>
                <a href={props.link}>
                  <b>
                    <button>View Phone Number</button>
                  </b>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        </div>
      </body>
    </>
  );
}
export default Cards;
