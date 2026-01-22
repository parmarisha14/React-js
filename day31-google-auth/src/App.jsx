import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Header from "./components/Header";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AddBook from "./components/AddBook";

const App = () => {
  

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/add-book"element={<AddBook/>}/>
      </Routes>
    </>
  );
};

export default App;
