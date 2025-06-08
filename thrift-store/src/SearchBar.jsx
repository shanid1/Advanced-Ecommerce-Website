import React, { useEffect, useState } from "react";



const SearchBar = ({ onSearch, onLogin, name ,onAdmin,homeClick}) => {
  const [query, setQuery] = useState("");
  const [loggedIn, setLoggedin] = useState(false);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    if (name !== "") {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
    if(name=="ADMIN"){
    setAdmin(true);
    setLoggedin(true);
    }
  }, [name]); 

  function handleSearch() {
    if (query.trim()) {
      onSearch(query.trim());
    }
  }

  function login() {
    onLogin();
  }

  function changeSearch(e) {
    setQuery(e.target.value);
  }
  function adminPanel(){
onAdmin();
  }
  return (
    <div className="searchbox">
      
      <button className="homebtn" alt="home" onClick={homeClick}style={{ backgroundImage: `url('/assets/homelogo.png')` }}></button>
      <input
        className="searchinput"
        placeholder='Search for a product...(eg:- "argentina" "pants" "shoes"")'
        type="text"
        value={query}
        onChange={changeSearch}
      />
      <button className="searchbtn" onClick={handleSearch}>
        Search
      </button>

      {!loggedIn && (
        <button className="searchbtn" onClick={login}>
          Login
        </button>
      )}
      {loggedIn && !admin && (
        <button className="usernameBtn" >
          {name}
        </button>
      )}
      {loggedIn && admin && (
        <button className="searchbtn" onClick={adminPanel}>
          {name}
        </button>
      )}
    </div>
  );
};

export default SearchBar;
