import React from 'react';
import { useParams } from 'react-router-dom';
import SideBar from '../components/sidebar/sidebar';
import EventSection from '../components/eventsection/eventsection'; 

const EventsPage = () => {
  const { id } = useParams(); 

  return (
    <>
      <h1>Event Details for Event {id}</h1>
      <div className="main-wrapper">
        <SideBar />
        <EventSection /> 
      </div>
    </>
  );
};

export default EventsPage;
