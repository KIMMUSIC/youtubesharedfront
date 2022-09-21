import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import MainPage from "./components/views/MainPage/MainPage";
import Refreshtoken from "./utils/silentrefresh";
import {useDispatch} from "react-redux";
import { loginUser } from "./_actions/userAction";
import {useSelector} from "react-redux";
function App() {

  const dispath = useDispatch();
  const user = useSelector((state) => state.user);

  /*
  useEffect(()=>{
    dispath(loginUser());
  },[])
  */

  return (
    <Router>
      <div>
        <Routes>
          <Route  path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route  path="/register" element={<RegisterPage/>} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/main/:groupname" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;