import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

function EventCard({ event }) {
  return (
    <>
      {event.eventDetails.map((detail, index) => (
        <div className="event-card event-ticket" key={index}>
          <h3 className="event-title">{event.eventName}</h3>
          <p>{detail.date} - {detail.time}</p>
          <div className="event-description">
            <p>{event.description}</p>
          </div>
          <div className="event-category">
            <p>Category: {event.category}</p>
          </div>
          <Link to={`/event/${event.eventName.replace(/\s+/g, '-').toLowerCase()}/${detail.date}`}>
            <button className="details-button">View Details</button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default EventCard;
