import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from '../button/button';
import '../../stylesheet.css';

const SideBar = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate('/homepage');
  };

  const goToClientpage = () => {
    navigate('/clientpage');
  };

  return (
    <>
        <div className="button-box">
        <Button text={'Dashboard'} onClick={goToHomepage}></Button>
        <Button text={'Clients'} onClick={goToClientpage}></Button>
        <Button text={'Settings'}></Button>
        <Button text={'Logout'}></Button>
        </div>
    </>
  );
};

export default SideBar;





