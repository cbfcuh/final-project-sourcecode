import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const MainSection = () => {
  const [date, setDate] = useState(new Date()); 
  const [cards, setCards] = useState([]); 
  const navigate = useNavigate(); 

  const addCard = () => {
    const newCard = {
      id: cards.length + 1,
      date: date.toDateString(), 
      content: "", 
      isSaved: false, 
      title: `Event ${cards.length + 1}`, 
    };
    setCards([...cards, newCard]);
  };

  const updateCardContent = (id, content) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, content } : card
    );
    setCards(updatedCards);
  };


  const handleSave = (id) => {
    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, isSaved: true, title: card.content || `Event ${card.id}` } : card
    );
    setCards(updatedCards);
  };

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleTitleClick = (id) => {
    navigate(`/eventspage/${id}`);
  };

  return (
    <>
      <div className="main-section-wrapper">
        <h1>Calendar</h1>
        <Calendar
          onChange={setDate}
          value={date}
          view="month"
          className="calendar"
        />
        <h3>Selected Date: {date.toDateString()}</h3>

        <button onClick={addCard} className="add-card-btn">
          Add Event Card for {date.toDateString()}
        </button>

        <div className="cards-section">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <h4
                onClick={() => handleTitleClick(card.id)}
                className="clickable-title"
              >
                {card.title}
              </h4>

              <p>Date: {card.date}</p>

              {!card.isSaved && (
                <>
                  <input
                    type="text"
                    placeholder="Type event details..."
                    value={card.content}
                    onChange={(e) => updateCardContent(card.id, e.target.value)}
                    className="card-input"
                  />
                  <button 
                    onClick={() => handleSave(card.id)} 
                    className="save-btn"
                  >
                    Save
                  </button>
                </>
              )}

              <button onClick={() => handleDelete(card.id)} className="delete-btn">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainSection;
