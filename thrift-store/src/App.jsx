import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Login from "./Login";
import Admin from "./Admin";
import ProductCard from "./ProductCard";
import Section from "./Section";
import All from "./All";
import Banner from "./Banner";
import Footer from "./Footer";
import ProductView from "./ProductView";
import About from "./About";

import ad2 from './assets/ad2.png';
import ad1 from './assets/ad1.png';
import ad3 from './assets/ad3.webp';
import "./App.css";
import { query } from "firebase/firestore";


function App() {
  const [showSearchBar, setShowSearch] = useState(true);
  const [showAdmin, setAdmin] = useState(false);
  const [showSection, setSection] = useState(false);
  const [showMain, setMain] = useState(true);
  const [showAll, setAll] = useState(false);
  const [showViewProduct, setView] = useState(false);


  const [username,setUsername] = useState("");
  const [title,setTitle] = useState("All");
  const [viewProduct,setViewProduct] =useState();
  const handleSearch = async (query) => {
    setMain(false);
    handleSection(query);
  };

  const handleHome=async(query)=>{
    setShowSearch(true);
    setAdmin(false);
    setSection(false);
    setMain(true);
    setAll(false);
    setView(false);
  }

  const handleLogin = async (query) => {
    setShowSearch(!showSearchBar);
  };
  const handleUserName = async (name) => {
    if(name==="MAIN"){
    setUsername("ADMIN");
    }
    else{
    setUsername(name);
    }
  };
  const handleAdmin = async()=>{
    setAdmin(!showAdmin);
  }
  
  
  const handleSection=(t)=>{
    setSection(!showSection);
    setMain(!showMain);
    setTitle(t);
    setAll(true);
    
  }
  const handleView=async(p)=>{
    setViewProduct(p);
    setView(true);
    setMain(false);
    
  }

  return (
    <>
    <div className="transition-container">
      <div
        
      >
        <SearchBar onSearch={handleSearch} homeClick={handleHome} onAdmin ={handleAdmin} onLogin={handleLogin} name={username} />
      </div>
      <div
        className={`fade-slide ${!showSearchBar ? "visible" : "hidden"}`}
      >
        <Login backBtn={handleLogin} userLoggedIn={handleUserName} onAdmin={handleAdmin}/>
      </div>
     {showAdmin && (<Admin />)}

      {showMain && <div className="mainAd">
      <div className="mobileAd" style={{display:"flex", justifyContent:"center"}}>
     <Section imgurl={ad1}width="60%"title="Hot Pics"goSection={() => handleSection("Hot")} />
     <Section imgurl={ad2} width="30%"title="RetroJERSEY"goSection={() => handleSection("Jersey")} />
      </div>
      <Banner/>
      <All mainTitle={"Top Selling"} name={username} showView={handleView}/>
      <Section imgurl={ad3} width="95%"title="Trending Pants"goSection={() => handleSection("Pants")} />
        <About/>
        </div>}
        <div>
  {showViewProduct && <ProductView product={viewProduct} />}
</div>


      <div>
       
        {showAll && (<All mainTitle={title} name={username} showView={handleView}/>)}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
