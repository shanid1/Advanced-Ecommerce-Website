import React, { useState } from "react";
import { db ,auth,provider} from "./firebase";
import { doc, getDoc } from "firebase/firestore"; 
import { signInWithPopup } from "firebase/auth";
const Login = ({backBtn,userLoggedIn}) => {
 
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

 const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Google Login Success:", user);
        userLoggedIn(user.displayName);
        backBtn();
      })
      .catch((error) => {
        console.error("Google Login Error:", error);
        alert("Google sign-in failed");
      });
  };

  function login() {
    if(name.trim()=="" || name.trim().length < 5){
        alert("Invalid Username")
        setName("");
        
        
    }else if(pass.trim()=="" || pass.trim().length < 5){
        alert("Invalid Password")

        setPass("");
    }
    else{
    const adminRef = doc(db,"admin","admin1");
    getDoc(adminRef).then((docSnap)=>{
        if(docSnap.exists){
            const adminData = docSnap.data();
            if (adminData.username === name && adminData.password === pass) {
          
        setName("");
        setPass("");
        userLoggedIn("MAIN");
        backBtn();

        } else {
          alert("Incorrect username or password");
          setName("");
        setPass("");
        }
      } else {
        alert("Admin user not found!");
        setName("");
        setPass("");
      }
    }).catch((err) => {
      console.error("Error checking credentials: ", err);
      alert("Something went wrong");
      setName("");
        setPass("");
    });
    }
    
  }
  

  function changeName(e) {
    setName(e.target.value);
  }function changePass(e) {
    setPass(e.target.value);
  }

  return (
    <>
      <div className="logincontainer">
        <div className="loginform">
            <h3>Login</h3>
            <input className="searchinput" value={name} type="text" placeholder="Username..."  onChange={(e)=>changeName(e)}></input>
            <br></br>
            <input className="searchinput" value={pass}type="password" placeholder="Password..." onChange={(e)=>changePass(e)}></input>
            <br></br>
            <button className="searchbtn" onClick={login}>Login</button>
            <button className="googleLogin" onClick={handleGoogleLogin}></button>
            <button className="backBtn" onClick={backBtn}>Back</button>
        </div>
      </div>

    </>
  );
};

export default Login;

