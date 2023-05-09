// import React from 'react'
// import "./Mycardslider.css";
// const Mycardsslider = (props) => {
//   return (
//     <>
//      <div className='mcard'>Card No . {props.cardno}</div> 
//     </>
//   )
// }

// export default Mycardsslider
import React from 'react'
import './Mycard.css'
const Mycard = (props) => {
    return (
        <div className='mycard'>
     <div className='cardzs'> {props.cardno}</div>   
            <div className="carssd">{props.title} </div>
            <div className='desp'>
            <div className="cardprice">{props.price}</div>  
            <div className="cardprice">{props.address}</div> 
            </div> 
         
           
          </div>
    )
}

export default Mycard;