import React  ,{useState}from "react";
import "./index.css";
import "./category.css";
import Service from "./Service";
 
function Filters (){
    const[items, setItems] =useState(Service);
  const filterItem = (nameitem)=>{
    const updatedItems = Service.filter((curElem)=>{
      return curElem.name ===  nameitem;

    });
     setItems(updatedItems);
  }

  return(<>
  <div className="const">
     <div className="f2"> 
     <p1>Filters</p1>
      <div className="menus">  
     <i> <strong className="the"><p2>Society-Wise</p2></strong></i>
      <div className="flexs">   
      <div >  <button className="btns1" onClick={()=>filterItem("Modern Valley")}>Modern Valley</button></div>
      <div> <button className="btns1">Omega</button></div> </div>
      <div className="flexs">
        <div><button className="btns1">PG's</button></div>
      <div><button className="btns1">GBP Crest</button></div>  </div>
      <div className="flexs"> <button className="btns1">Aura Avenue</button>
      <div> <button className="btns1">All</button></div></div>
      </div>
      <div className="menus">
  
<i> <strong className="the"><p2>BHK-Type</p2></strong></i>
 <div className="flexs">   
 <div >  <button className="btns1" onClick={()=>filterItem("1 BHK")}>1-BHK</button></div>
 <div> <button className="btns1">2-BHK</button></div> </div>
 <div className="flexs">
   <div><button className="btns1">PG's</button></div>
 <div><button className="btns1">3-BHK</button></div>  </div>
 <div className="flexs"> <button className="btns1">Studio-Type</button>
 <div> <button className="btns1">All</button></div></div>

    </div>
      </div>
      </div>
      
  </>);

}
export default Filters;