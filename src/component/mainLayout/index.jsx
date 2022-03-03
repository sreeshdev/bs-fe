import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import "./styles.scss";
import Sidebar from "../sidebar";

const MainLayout = () => {
  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
