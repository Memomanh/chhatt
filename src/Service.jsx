import React from "react";
import Cards from "./Cards";
import Filters from "./filtercategory";
const Service = () => {
  return (
    <>
      <div className="service">
        <h1 id="header" className="heading_style">
          {" "}
          Be Your Own Owner.
        </h1>
        <div className="cont">
      <Filters className="filters"/>
        <div className="serv">
          <Cards
            imgsrc="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_150,h_150/https://www.propertyone.lk/wp-content/uploads/2021/05/20686-Capitol-7-4-5-Property-One-21-592x444.jpg?v=1620187796"
            title=" Without Brookerage 2-BHK Flat"
            name="Modern Valley"
            price="Rs.18000"
            specs1="Fully Furnished"
            specs2="950 sq.ft"
            specs3="AC Rooms"
            link="https://www.google.com/search?q=modern%20valley%20loc&rlz=1C1CHBF_enIN1041IN1041&oq=modernvalley+loc&aqs=chrome..69i57j0i8i13i30i625.7440j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=AJOqlzWguBQc6PgNJsHSAYJ2XD1851JBlQ:1676651341251&rflfq=1&num=10&rldimm=12885105642591016402&lqi=ChFtb2Rlcm4gdmFsbGV5IGxvY0iMkbyV8a2AgAhaGRACGAAYASIRbW9kZXJuIHZhbGxleSBsb2OSARJyZWFsX2VzdGF0ZV9hZ2VuY3mqAQsQASoHIgNsb2MoAA&ved=2ahUKEwi22O38_Jz9AhW07zgGHcV3AywQvS56BAgLEAE&sa=X&rlst=f#rlfi=hd:;si:,30.764138667404513,76.60017031516111;mv:[[30.789181099999997,76.6377771],[30.7542589,76.4469211]]"
          />
          <Cards
            imgsrc="https://is1-2.housingcdn.com/01c16c28/efdf359b06d5e61c4062630214916f17/v0/fs/1_rk_apartment-for-rent-sector_66-Gurgaon-hall.jpg"
            title="  Without Brookerage 3-BHK Flat"
            name="  GBP Crest"
            specs1="Fully Furnished"
            specs2="890 sq.ft"
            specs3="AC Rooms"
            price="Rs.25000"
            link="https://www.netflix.com/search?q=series&jbv=81231974"
          />
          <Cards
            imgsrc=" https://housinganywhere.imgix.net/room/1208757/22626a76-3c67-11e7-8104-42010af00004.jpg?ixlib=react-9.2.0&auto=format"
            title="  Without Brookerage 1-BHK Flat"
            name="Ambika Greens"
            specs1="Semi Furnished"
            specs2="1250 sq.ft"
            specs3="AC Rooms"
            price="Rs.12000"
            link="https://www.netflix.com/search?q=series&jbv=70153404 "
          />
          <Cards
            imgsrc="https://mediacdn.99acres.com/media1/12758/3/255163107M-1602828380707.jpg"
            title="Without Brookerage 2-BHK Flat"
            name="Omega"
            price="Rs.19000"
            link="https://www.netflix.com/search?q=the%20vamp&jbv=70143860"
          />
          <Cards
            imgsrc="https://mediacdn.99acres.com/media1/2185/16/43716129M-1566482286310.jpeg"
            title=" Without Brookerage PG For Boys"
            name="Sukhi PG "
            specs1="Fully Furnished"
            specs2="850 sq.ft"
            specs3="Non-AC Rooms"
            price="Rs.7000"
            link="https://www.netflix.com/search?q=series&jbv=80179190 "
          />

          <Cards
            imgsrc="https://mediacdn.99acres.com/media1/20351/12/407032462M-1676271334804.jpg"
            title="Without Brookerage 3-BHK"
            name="Aura Avenue"
            specs1="Semi-Furnished"
            specs2="1640 sq.ft"
            specs3="AC Rooms"
            price="Rs.25000"
            link="https://www.netflix.com/search?q=series&jbv=80179190 "
          />
          <Cards
            imgsrc="https://ik.imagekit.io/flashaway/thumb_large_e0a0ce3b-35ea-4795-983e-c793ed0cb147.jpg"
            title="  Without Brookerage PG For Boys and Girls"
            name="Khalsa PG"
            specs1="Fully Furnished"
            specs2="250 sq.ft"
            specs3="Non-AC Rooms"
            price="Rs.7500"
            link="https://www.netflix.com/search?q=series&jbv=81231974"
          />
          <Cards
            imgsrc="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1646471185/Website/CMS-Uploads/tiakeslokujexhwsofc2.jpg"
            title="  Without Brookerage PG for Boys"
            name="Deol PG"
            specs1="Fully Furnished"
            specs2="650 sq.ft"
            specs3="AC Rooms"
            price="Rs.8000"
            link="https://www.netflix.com/search?q=series&jbv=81231974"
          />
        </div>
      </div>
      </div>
    </>
  );
};
export default Service;
