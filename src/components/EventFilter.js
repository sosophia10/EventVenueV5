import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../styles.css';

function EventFilter({ onFilterChange, category }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(category || '');  // Default from props
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [minTime, setMinTime] = useState('');
  const [maxTime, setMaxTime] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category); // Set the category from the URL
      handleSearchClick(); // Trigger the search when the category changes
    }
  }, [category]); // Run this effect whenever the category prop changes

  const handleFilterChange = () => {
    const filters = {
      search,
      category: selectedCategory,
      minDate,
      maxDate,
      minTime,
      maxTime,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    };
    if (onFilterChange) onFilterChange(filters);
  };

  const handleSearchClick = () => {
    handleFilterChange();
  };

  const handleClearFilters = () => {
    setSearch('');
    setSelectedCategory('');
    setMinDate('');
    setMaxDate('');
    setMinTime('');
    setMaxTime('');
    setPriceRange([0, 500]);
    handleFilterChange();
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="event-filter">
      <div className="filter-group">
        <label>Search</label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Category</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Musical">Musical</option>
          <option value="Play">Play</option>
          <option value="Opera">Opera</option>
          <option value="Ballet">Ballet</option>
          <option value="Concert">Concert</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Min. Date</label>
        <input
          type="date"
          value={minDate}
          onChange={(e) => setMinDate(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Max. Date</label>
        <input
          type="date"
          value={maxDate}
          onChange={(e) => setMaxDate(e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
        <Slider
          range
          min={0}
          max={500}
          value={priceRange}
          onChange={handlePriceRangeChange}
        />
      </div>

      <div className="filter-buttons">
        <button onClick={handleSearchClick}>Search</button>
        <button onClick={handleClearFilters}>Clear</button>
      </div>
    </div>
  );
}

export default EventFilter;
