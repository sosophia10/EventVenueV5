import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import '../styles.css';

function Home() {
  const [allEvents, setAllEvents] = useState([]);  // Original set of events
  const [filteredEvents, setFilteredEvents] = useState([]);  // Filtered results

  // Fetch the events data from the public folder
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/events-mock-data.json`)
      .then((response) => response.json())
      .then((data) => {
        setAllEvents(data.events);  // Store all events
        setFilteredEvents(data.events);  // Initialize filtered events with all events
      });
  }, []);

  const handleFilterChange = (filters) => {
    // Always apply filters to the full set of events (allEvents)
    const filtered = allEvents.filter((event) => {
      const matchesSearch = event.eventName
        .toLowerCase()
        .includes(filters.search.toLowerCase());
      const matchesCategory = filters.category
        ? event.category === filters.category
        : true;
      const matchesMinDate = filters.minDate
        ? new Date(event.eventDetails[0].date) >= new Date(filters.minDate)
        : true;
      const matchesMaxDate = filters.maxDate
        ? new Date(event.eventDetails[0].date) <= new Date(filters.maxDate)
        : true;
      const matchesMinTime = filters.minTime
        ? event.eventDetails[0].time >= filters.minTime
        : true;
      const matchesMaxTime = filters.maxTime
        ? event.eventDetails[0].time <= filters.maxTime
        : true;
      const matchesMinPrice = filters.minPrice
        ? event.eventDetails[0].ticketPrices.box >= filters.minPrice
        : true;
      const matchesMaxPrice = filters.maxPrice
        ? event.eventDetails[0].ticketPrices.box <= filters.maxPrice
        : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesMinDate &&
        matchesMaxDate &&
        matchesMinTime &&
        matchesMaxTime &&
        matchesMinPrice &&
        matchesMaxPrice
      );
    });

    setFilteredEvents(filtered);  // Update filtered events
  };

  const scrollDown = () => window.scrollTo(0, 500);

  return (
    <div>
      <div className="main-section">
        <h1>Welcome to the Event Venue</h1>
        <button onClick={scrollDown}>Get Your Tickets Now!</button>
      </div>
      <EventFilter onFilterChange={handleFilterChange} />
      <div className="events-section">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))
        ) : (
          <p>No events available</p>
        )}
      </div>
    </div>
  );
}

export default Home;
