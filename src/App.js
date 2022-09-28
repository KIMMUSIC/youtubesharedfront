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
import axios from "axios";
import { REFRESHTOKEN } from "./_actions/types";
function App() {

  const dispath = useDispatch();
  const user = useSelector((state) => state.user);

  /*
  useEffect(()=>{
    console.log("새로고침");
    axios({
      method : "get",
      url : "http://localhost:8080/silent-refresh",
  }).then((res) => dispath({
    type : REFRESHTOKEN,
    payload : res.data,
  }))
  .catch((err)=>console.log(err));
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