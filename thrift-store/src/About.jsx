import React from "react";
import "./Banner.css";
import ad2 from "./assets/ad2.png";
const About= (props)=>{
    return(<>
       <div className="about">
        <div>
            <h4>Collection</h4>
            <h2>Welcome to Shanid's Store -<br/> where your fashion shines.<br/> Discover our premium jerseys<br/> and wear your passion!</h2>
            <hr></hr>
            <h4>Our Clothing</h4>
            <p>Each jersey is meticulously crafted with precision embroidery,<br/> offering a unique touch that reflects your team’s spirit and individuality.<br/> Perfect for adding a personal flair to your performance.</p>
        </div>
        <div>
            <img src={ad2}></img>
        </div>
        
       </div>
       <div className="movingAd">
      <marquee> 
        <h2>||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;||HIGH QUALITY PRODUCT AT LOWEST RATE||   &nbsp;&nbsp;</h2>
        </marquee>
       </div> 
       <div className="details">
       <h2>Quality, Offers, and Surprises Await!</h2>
       <div className="smallAd">
       <div>       
        
        <img src="https://thayyilsports.com/wp-content/uploads/2023/09/Icon.jpeg"></img>
        <h2>Highest quality</h2>
        <p>Our exclusive experiences blend fitness<br/> and sports, creating the perfect <br/>harmony between body and mind.</p>
       </div>
       <div>
        <img src="https://thayyilsports.com/wp-content/uploads/2023/09/Icon2.jpeg"></img>
        <h2>Discounts on the way</h2>
        <p>Get ready for unbeatable deals –<br/> the best discounts on your favorite sports gear<br/> are coming soon!</p>

        </div>
       <div>
        <img src="https://thayyilsports.com/wp-content/uploads/2023/09/Icon3.jpeg"></img>
        <h2>Exciting surprises</h2>
        <p>Exciting surprises await –<br/> incredible discounts are coming soon,<br/> plus exclusive gift items with every purchase!</p>
        </div>
        </div>
       </div>
    </>)
}

export default About;