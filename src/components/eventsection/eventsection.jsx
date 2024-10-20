import React, { useRef, useEffect, useState } from "react";
import { Calendar } from '@fullcalendar/core';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

const EventsPage = () => {
  const calendarRef = useRef(null);
  const [calendar, setCalendar] = useState(null);
  const [resources, setResources] = useState([
    { id: 'a', title: 'Task A' },
    { id: 'b', title: 'Task B' },
    { id: 'c', title: 'Task C' },
  ]); // Manage resources dynamically
  const [events, setEvents] = useState([
    { id: '1', resourceId: 'a', start: '2024-10-20T09:00:00', end: '2024-10-20T10:00:00', title: 'Event 1' },
    { id: '2', resourceId: 'b', start: '2024-10-20T12:00:00', end: '2024-10-20T13:00:00', title: 'Event 2' },
  ]);


  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStart, setNewTaskStart] = useState('');
  const [newTaskEnd, setNewTaskEnd] = useState('');
  const [selectedResource, setSelectedResource] = useState('');

  useEffect(() => {
    const newCalendar = new Calendar(calendarRef.current, {
      plugins: [resourceTimelinePlugin],
      initialView: 'resourceTimelineDay',
      slotDuration: '01:00',
      scrollTime: '08:00:00',
      visibleRange: {
        start: '08:00:00',
        end: '20:00:00',
      },
      resources: resources,
      events: events,
    });

    newCalendar.render();
    setCalendar(newCalendar);

    return () => {
      newCalendar.destroy();
    };
  }, [resources, events]); 

  const addNewTask = () => {
    if (newTaskTitle && newTaskStart && newTaskEnd && selectedResource) {
      const newTask = {
        id: (events.length + 1).toString(),
        resourceId: selectedResource,
        start: newTaskStart,
        end: newTaskEnd,
        title: newTaskTitle,
      };

      setEvents([...events, newTask]); 
      calendar.addEvent(newTask); 

      
      setNewTaskTitle('');
      setNewTaskStart('');
      setNewTaskEnd('');
      setSelectedResource('');
    }
  };

  return (
    <div className="timeline-wrapper">
      <h1>Events Timeline</h1>
      <div ref={calendarRef} className="calendar-container"></div>

      <div className="task-input-section">
        <h3>Add New Task</h3>
        <input
          type="text"
          placeholder="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <input
          type="datetime-local"
          placeholder="Start Time"
          value={newTaskStart}
          onChange={(e) => setNewTaskStart(e.target.value)}
        />
        <input
          type="datetime-local"
          placeholder="End Time"
          value={newTaskEnd}
          onChange={(e) => setNewTaskEnd(e.target.value)}
        />
        <select
          value={selectedResource}
          onChange={(e) => setSelectedResource(e.target.value)}
        >
          <option value="" disabled>Select Resource</option>
          {resources.map((resource) => (
            <option key={resource.id} value={resource.id}>{resource.title}</option>
          ))}
        </select>
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </div>
  );
};

export default EventsPage;
