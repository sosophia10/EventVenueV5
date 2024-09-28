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
          <div className="event-pricing">
            <p>Box: ${detail.ticketPrices.box}</p>
            <p>Orchestra: ${detail.ticketPrices.orchestra}</p>
            <p>Main Floor: ${detail.ticketPrices.mainFloor}</p>
            <p>Balcony: ${detail.ticketPrices.balcony}</p>
          </div>
          {/* Use Link to route to event details page */}
          <Link to={`/event/${event.eventName.replace(/\s+/g, '-').toLowerCase()}/${detail.date}`}>
            <button className="details-button">View Details</button>
          </Link>
        </div>
      ))}
    </>
  );
}

export default EventCard;
