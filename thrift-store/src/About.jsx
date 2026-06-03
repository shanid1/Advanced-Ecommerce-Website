import React from "react";
import "./Banner.css";
import ad2 from "/assets/ad2.png";
import bannerImage from '/assets/bannerr.png';

const About= (props)=>{
    return(<>
       <div className="about">
        <div>
            <h4>Collection</h4>
            <h2>Welcome to Shanid's Store -
<br/>where timeless style meets everyday comfort.<br/>Discover our carefully selected thrifted jeans<br/>and find the perfect fit for your wardrobe.</h2>
            <hr></hr>
            <h4>Our Denim</h4>
            <p>Each pair is handpicked for its quality, durability,<br/> and unique character, offering styles that stand out from the crowd.
.<br/> Perfect for expressing your individuality while staying comfortable every day.</p>
        </div>
        <div>
            <img src={ad2} style={{ backgroundSize: "cover" , width: "100%", height: "100%" , borderRadius:'0px'}}></img>
        </div>
        
       </div>
    
        <div className="movingAd" style={{ backgroundImage: `url(${bannerImage})`}}>
      <marquee behavior="alternate" direction="left" scrollamount="5"> 
        <h2>||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;</h2>
        </marquee>
       </div> 
       <div className="details">
       <h2>Quality, Offers, and Surprises Await!</h2>
       <div className="smallAd">
       <div>       
        
        <img src="/assets/quality.png"></img>
        <h2>Highest quality</h2>
        <p>Our exclusive experiences blend fitness<br/> and sports, creating the perfect <br/>harmony between body and mind.</p>
       </div>
       <div>
        <img src="/assets/discount.png"></img>
        <h2>Discounts on the way</h2>
        <p>Get ready for unbeatable deals –<br/> the best discounts on your favorite sports gear<br/> are coming soon!</p>

        </div>
       <div>
        <img src="/assets/surprise.png"></img>
        <h2>Exciting surprises</h2>
        <p>Exciting surprises await –<br/> incredible discounts are coming soon,<br/> plus exclusive gift items with every purchase!</p>
        </div>
        </div>
       </div>
    </>)
}

export default About;