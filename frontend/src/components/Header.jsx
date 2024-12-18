import React, { useState } from "react";
import "./Header.css";
import { HiOutlineUserCircle } from "react-icons/hi2";
import UserContainer from "./UserContainer/UserContainer";

const Header = ({showUser, setShowUser}) => {

  return (
    <div className="header" style={{ position: "relative" }}>
      <div className="header-title">
        <h1>PupilPro</h1>
      </div>
      <HiOutlineUserCircle
        color="white"
        className="user-icon"
        style={{ fontSize: "45px", marginRight: "80px", cursor: "pointer", zIndex:5 }}
        onClick={() => setShowUser((prev) =>!prev)}
      />
      {showUser ? <UserContainer setShowUser={setShowUser} /> : <></>}
    </div>
  );
};

export default Header;
