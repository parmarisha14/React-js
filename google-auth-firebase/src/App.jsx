import React, { useState } from "react";
import "./App.css";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase/config";

const provider = new GoogleAuthProvider();

const App = () => {
  const [user, setUser] = useState({});

  
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user); // user object set
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser({}); 
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      {user.displayName ? (
        <>
          <h2>Welcome, {user.displayName}</h2>
          
          <br /><br />
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleGoogle}>Login with Google</button>
      )}
    </div>
  );
};

export default App;
