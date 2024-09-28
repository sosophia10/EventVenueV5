import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'; // Importing default rc-slider styles
import '../styles.css'; // Assuming you have a custom stylesheet

function EventFilter({ onFilterChange }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [minTime, setMinTime] = useState('');
  const [maxTime, setMaxTime] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]); // Min/Max price range

  const handleFilterChange = () => {
    const filters = {
      search,
      category,
      minDate,
      maxDate,
      minTime,
      maxTime,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    onFilterChange(filters);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
    handleFilterChange();
  };

  return (
    <div className="event-filter">
      <div className="filter-group">
        <label>Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="filter-group">
        <label>Category</label>
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            handleFilterChange();
          }}
        >
          <option value="">All Categories</option>
          <option value="musical">Musical</option>
          <option value="play">Play</option>
          <option value="opera">Opera</option>
          <option value="ballet">Ballet</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Min. Date</label>
        <input
          type="date"
          value={minDate}
          onChange={(e) => {
            setMinDate(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="filter-group">
        <label>Max. Date</label>
        <input
          type="date"
          value={maxDate}
          onChange={(e) => {
            setMaxDate(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="filter-group">
        <label>Min. Time</label>
        <input
          type="time"
          value={minTime}
          onChange={(e) => {
            setMinTime(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="filter-group">
        <label>Max. Time</label>
        <input
          type="time"
          value={maxTime}
          onChange={(e) => {
            setMaxTime(e.target.value);
            handleFilterChange();
          }}
        />
      </div>

      <div className="filter-group">
        <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <div className="price-slider">
          <Slider
            range
            min={0}
            max={500} // Adjust max price range here
            value={priceRange}
            onChange={handlePriceRangeChange}
            trackStyle={[{ backgroundColor: 'black', height: 10 }]} // Track color
            handleStyle={[
              { borderColor: 'black', height: 20, width: 20, marginTop: -5 },
              { borderColor: 'black', height: 20, width: 20, marginTop: -5 },
            ]} // Handle color and size
            railStyle={{ backgroundColor: 'gray', height: 10 }} // Rail color
          />
        </div>
      </div>
    </div>
  );
}

export default EventFilter;
