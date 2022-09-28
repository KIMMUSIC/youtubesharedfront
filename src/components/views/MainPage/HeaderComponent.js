import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { loginUser } from "../../../_actions/userAction";
import {useNavigate} from "react-router-dom";

import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
function HeaderComponent(props) {
  const user = useSelector(state => state.user);


  if(user.REFRESHTOKEN){
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}>
        <div>{user.REFRESHTOKEN}</div>
    </div>
  );
  }else{
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100vh",
        }}>
          <div>"로그인다시"</div>
      </div>
    );
  }
}

export default HeaderComponent;