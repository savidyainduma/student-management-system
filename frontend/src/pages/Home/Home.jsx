import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import UserContainer from "../../components/UserContainer/UserContainer";

const Home = ({ setShowAdd }) => {
  const navigate = useNavigate();
  const [showUser, setShowUser] = useState(false);

  return (
    <div className="home" onClick={() => {if(showUser) setShowUser(false)}}>
      
      `
      <Header showUser={showUser} setShowUser={setShowUser}/>
      <div className="button-section">
        <button className="btn" onClick={() => setShowAdd(true)}>
          Add a new student
        </button>
        <button className="btn" onClick={() => navigate("/allstudents")}>
          View all students
        </button>
      </div>
    </div>
  );
};

export default Home;
