import { render } from "@testing-library/react";
import React from "react";
import GroupList from "./GroupList";
import MainView from "./MainView";
import HeaderComponent from "./HeaderComponent";

const MainPage = ({match})=>{

  return (
    <>
    <HeaderComponent className="header" />
    <GroupList className="sidebar" />
    <MainView className="main"/>
    </>
  );


}

export default MainPage;

