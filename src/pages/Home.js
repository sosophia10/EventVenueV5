import React, { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';
import EventFilter from '../components/EventFilter';
import '../styles.css';
import { useParams } from 'react-router-dom';

function Home() {
  const [allEvents, setAllEvents] = useState([]);  // Original set of events
  const [filteredEvents, setFilteredEvents] = useState([]);  // Filtered results
  const { category } = useParams();  // Get category from URL

  // Fetch the events data from the public folder
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/events-mock-data.json`)
      .then((response) => response.json())
      .then((data) => {
        setAllEvents(data.events);  // Store all events
        if (category) {
          handleFilterChange({ category });  // Trigger filtering for the category from URL
        } else {
          setFilteredEvents(data.events);  // Initialize filtered events with all events
        }
      });
  }, [category]);  // Re-fetch when the category changes

  const handleFilterChange = (filters) => {
    const filtered = allEvents.filter((event) => {
      const matchesCategory = filters.category
        ? event.category.toLowerCase() === filters.category.toLowerCase()
        : true;
      // Other filter conditions (date, price, etc.) can be added here
      return matchesCategory;
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
      {/* Pass the category from the URL to EventFilter */}
      <EventFilter onFilterChange={handleFilterChange} category={category || ''} />
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
