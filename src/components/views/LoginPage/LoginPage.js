import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/userAction";
import {useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import axios from "axios";
import {LOGIN} from "../../../_actions/types"

function LoginPage(props) {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.counter);

  const [Password, setPassword] = useState("");
  const [Id, setId] = useState("");

  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onIdHandler = (e) =>{
    setId(e.currentTarget.value);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let body = {
      id : Id,
      password : Password
    }
    //dispath(loginUser(body));

    axios({
      method : "post",
      url : "http://localhost:8080/api/login",
      data : body
  }).then((res) =>{ 
    console.log(res);
    if(res.data.code === "USER_NOT_FOUND"){
      alert("비번틀림")
    }else{
    dispath({
    type : LOGIN,
    payload : res.data,
  })
  navigate("/main");
}
})
  .catch((err)=>{
    
    
  });
    
  

    //navigate("/main");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
        <div>{user}</div>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "flex", flexDirection: "column" }}>
        <label>ID</label>
        <input type="text" value={Id} onChange={onIdHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHanlder} />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;