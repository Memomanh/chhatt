// import React from "react";
// import Mycardsslider from "./Mycardsslider";
// import "./Crousel.css";
// const Crousel = () => {
//   let box = document.querySelector(".mycardcontainer");
//       const btnpressprev = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft-width;
//         console.log(width);
//       };
//       const btnpressnext = () => {
//         let width = box.clientWidth;
//         box.scrollLeft = box.scrollLeft-width;
//         console.log(width);
//        };
//   return (
//         <div className="highflats">
//           {/* <div className="focss">
//             {" "}
//             <h1>Flats in Focus</h1>
//             <p1>With highest reviews</p1>{" "}
//           </div> */}
//           <div className="card-crousel">
//             <button className="pre-btn" onClick={btnpressprev}>
//               <p>&lt;</p>
//             </button>
//             <button className="next-btn" onClick={btnpressnext}>
//               <p>&gt;</p>
//             </button>
//           </div>
//           <div className="mycardcontainer">
//             <Mycardsslider cardno="1" />
//             <Mycardsslider cardno="2" />
//             <Mycardsslider cardno="3" />
//             <Mycardsslider cardno="4" />
//             <Mycardsslider cardno="5" />
//             <Mycardsslider cardno="6" />
//             <Mycardsslider cardno="7" />
//             <Mycardsslider cardno="8" />
//             <Mycardsslider cardno="9" />
//             <Mycardsslider cardno="10" />
//             <Mycardsslider cardno="11" />
//             <Mycardsslider cardno="12" />
//           </div>
//         </div>
//       );
//     };

//     export default Crousel;
import React from 'react'
import Mycard from './Mycard.js'
import './Crousel.css'
const Crousel = () => {
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }

    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width);
        console.log('hellp');
    }
    return (
        <>
        <div><h2>Flats in Focus</h2></div>
        <div className="product-carousel">
            <button className="pre-btn" onClick={btnpressprev}><p>⬅</p></button>
            <button className="next-btn" onClick={btnpressnext}><p>➡</p></button>


            <div className="product-container">
           
                <Mycard cardno='Aura Avenue' 
                    price = 'Rs.25,000'
                    title ='3-Bhk'
                    address = "Flat No. 129"
            // imgs="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150,h_150/https://www.propertyone.lk/wp-content/uploads/2021/05/20686-Capitol-7-4-5-Property-One-21-592x444.jpg?v=1620187796"
                 
                />
                <Mycard cardno='Modern Valley'
                price = 'Rs.40,000'
                    title ='4-Bhk'
                    address = "Flat No. 1224" />
                <Mycard cardno='Omega City' 
                    price = 'Rs.10,000'
                    title ='1-Bhk'
                    address = "Flat No. 999"
                />
                <Mycard cardno='Sukhi PG' 
                    price = 'Rs.25,000'
                    title ='3-Bhk'
                    address = "Flat No. 729"
                />
                <Mycard cardno='Ek Onkar City'
                price = 'Rs.23,000'
                    title ='3-Bhk'
                    address = "Flat No. 880" />
                <Mycard cardno='GBP Crest' 
                    price = 'Rs.8,000'
                    title ='1-Bhk'
                    address = "Flat No. 23"
                />
                <Mycard cardno='Darpan Greens'
                price = 'Rs.17,000'
                    title ='2-Bhk'
                    address = "Flat No. 80" />
                {/* <Mycard cardno='8' />
                <Mycard cardno='9' />
                <Mycard cardno='10' />
                <Mycard cardno='11' />
                <Mycard cardno='12' />
                <Mycard cardno='13' /> */}
            </div>
        </div>
        </>
    )
}

export default Crousel;