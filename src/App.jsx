import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homepage';
import Eventspage from './pages/eventspage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/eventspage/:id" element={<Eventspage />} />
      </Routes>
    </Router>
  );
};

export default App;
