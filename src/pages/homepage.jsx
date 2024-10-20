import React from "react";
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/sidebar/sidebar';
import MainSection from '../components/mainsection/mainsection';

const HomePage = () => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/eventspage'); 
  };

  return (
    <>
      <div>
        <h1>
          <a href="../homepage">The Big Event</a>
        </h1>
      </div>
      <div className="main-wrapper">
        <SideBar className="side-bar" />
        <MainSection className="main-section">
          <div className="card" onClick={handleCardClick}>
            <h2>Click me to go to Events Page</h2>
          </div>
        </MainSection>
      </div>
    </>
  );
};

export default HomePage;
