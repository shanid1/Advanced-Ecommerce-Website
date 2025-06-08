import React from "react";
import "./Banner.css";
import bannerImage from './assets/banner.png';

const Banner= (props)=>{
    return(<><div className="banner" style={{ backgroundImage: `url(${bannerImage})` }}>

        <h1>Shipping all <span className="btext">over India</span></h1>
        <h3>just at <span>₹50</span></h3>
       </div>
    </>)
}

export default Banner;