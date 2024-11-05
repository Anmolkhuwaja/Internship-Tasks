import React, { useState } from 'react';
import './Style.css';

const JobSearch = ({ jobs, onSearch, onSelectJob }) => {
  const [title, setTitle] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  // Handle input change to show suggestions
  const handleInputChange = (e) => {
    const inputTitle = e.target.value;
    setTitle(inputTitle);

    // Generate suggestions based on the input
    if (inputTitle.length > 0) {
      const filteredSuggestions = jobs.filter((job) =>
        job.title.toLowerCase().includes(inputTitle.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Handle selecting a suggestion from the dropdown
  const handleSuggestionClick = (job) => {
    setTitle(job.title); // Set input to selected job title
    setSuggestions([]);  // Clear suggestions
    onSelectJob(job);    // Display selected job details
  };

  // Handle search button click
  const handleSearchClick = () => {
    const filteredJob = jobs.find((job) =>
      job.title.toLowerCase() === title.toLowerCase()
    );
    if (filteredJob) {
      onSelectJob(filteredJob);
    } else {
      alert('Job not found. Please refine your search.');
    }
  };

  return (
    <div className="job-search">
      <input
        type="text"
        placeholder="Job Title (e.g., Frontend Developer)"
        value={title}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <div className="autocomplete-dropdown">
          {suggestions.map((job) => (
            <div
              key={job.id}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(job)}
            >
              {job.title}
            </div>
          ))}
        </div>
      )}
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default JobSearch;
